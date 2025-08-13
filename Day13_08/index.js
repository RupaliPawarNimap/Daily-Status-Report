const cluster =require("cluster");


if(cluster.isMaster){
    const os =require("os")
    const cpuLen =os.cpus().length;
    console.log(`master process ${process.pid}`);
    for(let i=0;i<cpuLen;i++){
         
        cluster.fork()
    }
    cluster.on("exit",(worker)=>{
        console.log(`Worker process ${worker.process.pid} died ,Restatring....`);
    })
}
else{
    const  express = require('express')
    const app = express()
    const port = 3000
    
    app.get('/', (req, res) => res.send('Hello World!'))
    app.listen(port, () => console.log(`Example app listening on port ${process.pid}!`))
}