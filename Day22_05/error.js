 
// process.on("uncaughtException",(err,res)=>{
//    console.error("somethong went wrong",err.message);
//    process.exit(1);
// });
//  function fun(){
//     throw new Error("something went wrng");
// }

// fun();
 

 let promise =new Promise((res,rej)=>{
    res("I am Rejected")
 }).then((result)=>{
    console.log(result);
 })
process.on("unhandledRejection",(err)=>{
    console.log(err);
})


