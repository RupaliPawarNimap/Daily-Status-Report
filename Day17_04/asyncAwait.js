// let promise =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("I am resolved2")
//     },1000)
// });

// async function name2(  ) {
//     return promise
// }

// let handlePromise =name2();
// handlePromise.then(res =>{
//     console.log(res);
// })





// async function name( name) {
//     return name
// }
// let getdata =name("Rupali");
// // console.log(typeof(name));/
// // console.log(typeof(getdata));
// getdata.then((res)=>{
// console.log(res);
// })
 

 
let promise1 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I am resolved1")
    },1000)
});

// function getdata(){
//     promise1.then((res)=>{
//         console.log(res);
//     })
//     console.log("I will execute first");
// }
// getdata()
let promise2 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("I am resolved2")
    },10000)
});


// async function asyncfunction(){
//     console.log("I will excute before await code");
//      let val1 =await promise1;
//      console.log(val1);
//     console.log("I will execute later");


//     let val2 =await promise2;
//     console.log(val2);
//    console.log("I will execute later");
// }
// asyncfunction()



let api =fetch("http://localhost:3000/api/location");
async function fetchData(){
    try{
        let data =await api;
        let json =await data.json();
        console.log(json);
    }
    catch(err){
        console.log("The err:",err);

    }
  
}
fetchData()
