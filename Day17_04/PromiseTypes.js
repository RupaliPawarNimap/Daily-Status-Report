let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1)
    },1000)
}) 
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(3);
let p4 =Promise.reject(4)
Promise.all([p1,p2,p3]).then((val)=>{//if all true then give all the resolved prmise result
console.log(val);
});


let x1=Promise.resolve(1);
let x2 = Promise.reject("Error");
let x3 = Promise.resolve(3);
Promise.all([x1,x2,x3]).then((val)=>{//anyone faliss thenreturn the err
console.log(val);
}).catch((err)=>{
    console.log(err);
})


Promise.race([p1,p2,p3,p4]).then((val)=>{  //First settled
    console.log(val);
})

Promise.any([p1,p2,p3,p4]).then((val)=>{//First resolved
console.log(val);
})

