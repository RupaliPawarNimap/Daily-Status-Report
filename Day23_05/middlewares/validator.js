exports.validator =(req,res,next)=>{
    const {name,email} =req.body;
    if(!name || !email){
      return   res.status(500).send("Internal Server Error")
    }
    next();
}