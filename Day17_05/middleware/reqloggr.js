const logger =(req,res,next)=>{
    console.log(`${req.url},${req.method},${req.headers},${req.ip}`);
    console.log("done");
    next();
    
}
module.exports =logger