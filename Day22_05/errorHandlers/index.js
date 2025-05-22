const express =require("express");
const app =express;

// process.on("uncaughtException",(err)=>{
//     console.log("Synchronous Error",err.message);
  
// })
process.on("unhandledRejection",(reason,promise)=>{
    console.log(reason,"This is the reason");
})


// function sync(){
//     throw new Error("Sync Error")
// }
// sync();

console.log(process.pid);
console.log(process.version);
console.log(process.versions);
console.log(process.platform);
console.log(process.arch);
console.log(process.uptime());
// console.log("This is Process config",process.config);
console.log(process.cwd())
// console.log(process.kill(8372));
function async(){

      return  Promise.reject("Promise Rejected")

}
async()