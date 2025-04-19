function logginig(req,res,next){
    console.log("Logging...!");
    next()
}

module.exports = {logginig}