const todo =require("../models/todo");

const createTodo =async(req,res)=>{
    console.log("Hit to")
try{
    const {title,description} =req.body;
    console.log(title,description)
    const response = await todo.create({title,description});
    res.status(200).json({
        status:true,
        message:"Entry Added",
        data:response
    })

}
catch(err){
    console.log(err.message);
    console.error(err)
    res.status(500).json({
        status:"failed",
        message:"Entry not added",
        data: "no"
    })
}
}
module.exports =createTodo