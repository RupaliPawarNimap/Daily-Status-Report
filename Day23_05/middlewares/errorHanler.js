 exports.error=(err,req,res,next)=>{
    console.log("Err is ",err.message);
    res.status(400).json("Something went wrong",err.message);
}