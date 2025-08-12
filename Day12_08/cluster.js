const cluster =require("cluster")
const express=require("express");
 
const os =require("os")

 

if(cluster.isMaster){
    let len =os.cpus().length;
    console.log(`Master ${process.pid} is Running`);
    for(let i=0;i<len;i++){
cluster.fork()
    }
    cluster.on("exit",(worker)=>{
        console.log(`Worker ${worker.process.pid} is Died`);
        cluster.fork()
    })

    
        
}else{
    const app =express()

    app.get("/",(req,res)=>{
        return res.send(`Hello From  worker ${process.pid}`)
    })
    app.listen(4000,()=>{
        console.log(`Running on ${process.pid}`);
    })

}