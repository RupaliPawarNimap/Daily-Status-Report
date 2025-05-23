exports.logger=(req,res,next)=>{
console.log(`Method is: ${req.method} Url us :${req.url}`);
next()
}