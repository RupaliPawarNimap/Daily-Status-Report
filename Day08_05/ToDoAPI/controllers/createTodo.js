const Todo =require("../models/CreteSchma");

 exports.creteTodo =async(req,res)=>{
    console.log("Hit to")
    try{
        const {title,description} =req.body;
        console.log(title,description)
        const response =await Todo.create({title,description});
        res.status(200).json( {
            status:"Success",
            data:response,
            msg:"Entry Done Succesfully"
        });
    }
    catch(err){
     console.log("Failed To Add Data");
     res.status(500).json({
        status:"Failed",
        data:"Internal server Error",
        msg:"Server Error"
     })
     
    }

   
}
  