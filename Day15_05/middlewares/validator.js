exports.validator =(req,res,next)=>{
   const {name,email} =req.body;
   if(!name || !email){
 return   res.send("Name and Email Fields are Mandatory")
   }
   next()

}