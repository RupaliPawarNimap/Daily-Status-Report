// const { error } = require("console");

function timeout(delay){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Resolved")
        },  delay);
    })
}

function fakeApi(delay){
    return new Promise((_,reject)=>{
        setTimeout(()=>{
reject("rejected")
        },delay)
    })
}

async function fetchWithTimeoutAndRetry(fakeApi,timeut=500){
    try{
        const data =await Promise.race([
        fakeApi(),
        timeout(timeut)
        
        ])
        return data
    }
    catch(err){
        console.log("First try fILED",err);
        try{
            const data =await Promise.race([
            fakeApi(),
            timeout(timeut)
            
            ])
            return data
    }
    catch(err2){
        console.log("second try failed",err2);
        throw new Error("2nd attempt also falied")

    }
}


}

fetchWithTimeoutAndRetry(() => fakeApi(1000))
  .then(result => console.log("Final result:", result))
  .catch(error => console.log("Error:", error.message))