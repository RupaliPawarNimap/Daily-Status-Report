const validator =(req,res,next)=>{
    const {name,email,age,department,position,salary }=req.body;
    if(!name||!email||!age||!department||!position||!salary){
        return res.status(400).json("Enter Valid Details")
    }
    next();

}
module.exports =validator