//     let promise =new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("I am resolved")
//         },1000)
//     });
//     // promise.then((result)=>{
//     //     console.log("Function resllvd",result);
//     // })

const { rejects } = require("assert")
const { resolve } = require("path")


 


// async function name(){
//     try{
//         let data =await promise;
//         console.log(data);
//     }
//     catch{
//         console.log("error occured");
//     }
    
// }
// name()


// new Promise((resolve, reject) => {
//     // resolve("I am Promise 2")
//     reject()
// }).then((res)=>{
// console.log(res);
// }).catch((err)=>{
//     console.log("Err",err);
// })
let cart=["p1","p2","p3"]
creteOrder(cart).then((orderid)=>{
    console.log( orderid);
    return paymentinfome(orderid)
})
.catch((err)=>{
    console.log("err is:",err);
}).then((paymentinfo)=>{
    return  paymentinfo
})
 
 

function creteOrder( ){
    let p =new Promise((resolve,reject)=>{
        if(!validateOrder()){
             reject("card is not validate")
        }
        else{
            let cardid =123;
             resolve({"Card id:":cardid})

        }
    })
    return p

}

function validateOrder(){
    return false
}
function paymentinfome(){
    console.log("Payment succsfull");
}