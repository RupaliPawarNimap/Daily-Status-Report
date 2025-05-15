let user =require("../middlewares/usermiddleware")
exports.createUser =async(req,res)=>{
    const {name,email,password,role} =req.body
    const data ={id:user.length+1,name,email,password,role}
     user.push(data)
    console.log(data);
    res.send(data)

}
exports.getAllUsers =(req,res)=>{
    res.send(user)
}
exports.getById=async(req,res)=>{
     id =req.params.id;
    try{
    let index =user.find(p=>p.id==id);
    console.log(index);
    res.send(index)
    }
    catch(err){
        console.log(err.message);
        res.json(400).json("Error to get and id")
    }
   
}
 
