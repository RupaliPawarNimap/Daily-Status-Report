const {isMainThread,Worker, workerData} =require("worker_threads");
console.log("worker thread id",process.pid);

if(isMainThread){
    let worker =new Worker("./worker.js",{workerData:{num:20000}});
worker.on("message",(worker)=>{
    console.log("Data is ",worker);
})

worker.on("error",(err)=>{
    console.log("Err is ",err);
})

worker.on("exit",(code)=>{
    console.log("exist msg is ",code);
})
}
console.log("Main thred is ready to do other task");