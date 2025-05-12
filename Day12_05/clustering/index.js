const express =require("express");
const cluster=require("cluster")
const process =require("process")
const app =express();
const totalCpus =require("os").cpus().length
 
if(cluster.isPrimary){
    console.log("Listeing on ",process.pid);
    for(let i=0;i<totalCpus;i++){
        cluster.fork();
        
    }
}
else{
 
    const port = 3000
    
    app.get('/', (req, res) => res.send('Hello World!'))
    app.get("/hello",(req,res)=>{
        res.send("Hello how are u?");
        
    })
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}
// const express =require("express");
// const app =express();
// app.get("/",(req,res)=>{
//     res.send("Hello Rupali Here!")
// })
// app.listen(3000,()=>{
//     console.log("Listening");
// })
