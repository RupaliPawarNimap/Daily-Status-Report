const {parentPort} =require("worker_threads");
let sum =0

for(let i=0;i<=10000;i++){
    sum+=i
}


parentPort.postMessage(sum)