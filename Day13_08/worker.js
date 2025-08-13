const {parentPort,workerData} =require("worker_threads");


let num =workerData.num;
let sum =0

for(let i=1;i<=num;i++){
    sum+=i
}

parentPort.postMessage(sum)


