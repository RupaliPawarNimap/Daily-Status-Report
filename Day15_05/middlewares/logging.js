exports.logging =async(rej,res,next)=>{
    console.log("This middleware only work for speacial route");
    next()
}