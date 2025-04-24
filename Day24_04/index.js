// console.log("start");

// process.nextTick(() => console.log("nextTick"));
// setTimeout(() => console.log("timeout"), 0);
// setImmediate(() => console.log("immediate"));

// console.log("end");

// // Output:
// // start
// // end
// // nextTick
// // timeout or immediate (order may vary depending on platform)

// const obj1 ={
//     name:"Rupali",
//     age:21,
//     add:{
//         city:"Mumbai"
//     }
// }
// // console.log(obj1);
// const obj2 =obj1
// // console.log(obj2)
// console.log(obj1==obj2);
// console.log(obj1===obj2);
// const obj3 ={
//     name:"Rupali",
//     age:21,
//     add:{
//         city:"Mumbai"
//     }
// }
// console.log(obj1==obj3);
// let a =1
// let b=1
// console.log(a===b);
// console.log(a==b);
async function asyncFunc() {
   
console.log("1");
await Promise.resolve();
console.log("2");
}

 
console.log("Start");
asyncFunc();
console.log("End");

let id =setTimeout((function(){
    console.log("hello")
}),1000)


console.log(id);
console.log(window)
