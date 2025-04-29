// var variable =20;
// (()=>{
//     console.log(variable);
//     variable =10
//     console.log(variable);
// })();
// console.log(variable);
// var variable=12

// const obj = {
//     normal: function() { console.log(this); },
//     arrow: () => console.log(this)
//   };
//   obj.normal(); // ?
//   obj.arrow();  // ?



// const fs =require("fs");
// // const { setTimeout } = require("timers/promises");
//  setTimeout(()=>{
//     console.log("Hello I am settimeout ");
//  },0)

//  setImmediate(()=>{
//     console.log("Hello I am Set immediate");
//  })
//  fs.readFile("sample.txt","utf-8",()=>{
//     console.log("IO pooing");
//     setTimeout(()=>{
//         console.log("Inside the readfile");

//     },0)
//     setTimeout(()=>{
//         console.log("Inside 2nd readfile");
//     },5000)
//     setImmediate(()=>{
//         console.log("This is setimmeditae");
//     })
//  })
//  console.log("Hello");

// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 0);

// setImmediate(() => {
//   console.log("Immediate");
// });

// process.nextTick(() => {
//   console.log("NextTick");
// });

// console.log("End");
// const fs = require("fs");

// fs.readFile("sample.txt", () => {
//   console.log("I/O callback");

//   setImmediate(() => {
//     console.log("setImmediate inside I/O");
//   });

//   setTimeout(() => {
//     console.log("setTimeout inside I/O");
//   }, 0);

//   process.nextTick(() => {
//     console.log("nextTick inside I/O");
//   });
// });

// console.log("Outside I/O");
setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));
console.log("end");

while (Date.now() < Date.now() + 100); // blocks thread

 

