 
exports.handleSync=()=>{
    process.on("uncaughtException",(err)=>{
        console.log("uncaught Error");
        process.exit(1)

    })
}

exports.handleAsync=()=>{
    process.on("unhandledRejection",(reason,promise)=>{
        console.log("Unhadled Promise Rejection ",reason);
        process.exit(1)
    })
}