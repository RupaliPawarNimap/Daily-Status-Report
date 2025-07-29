// const express = require('express')
// const app = express()
// const os =require("os");
// const cluster =require("cluster");
// const port = 3000
// const morgan =require("morgan")
// let numcpus =os.cpus().length;
 

// app.use(morgan('combined'))
// if(cluster.isMaster){
//     console.log(`Cluster is working ${process.pid}`);
// for(let i=0;i<numcpus;i++){
//     cluster.fork()
// }
// cluster.on("exit",(worker,code,signal)=>{
//     console.log(`process ${worker.process.pid} Died`);
//     cluster.fork()
// })
// }
// else{

// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`Worker Process is listing ${process.pid}!`))
// } 