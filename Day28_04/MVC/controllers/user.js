const express =require("express");
let id=1
let user =[]
const getallUser =(req,res)=>{
    res.send(user)
}

const createUser =(req,res)=>{
    let data =req.body;
    console.log(data);
    
    let newdata ={id:id++,...data}
    user.push(newdata )
    res.json(data);
}

const getUSer=(req,res)=>{
    let id =req.params.id;
    let index =user.find(p=>p.id==id);
    if(!index){
        res.status(400).json("User not Found");
    }
    else{
        res.send(index)
    }
    
}
const deleteUser =(req,res)=>{
    let id =req.params.id;
    let index =user.find(p=>p.id==id);
    if(!index){
        res.status(404).json("USer not Found")
    }
    else{
        let deleteduser = user.splice(index,1)
        res.json(`Deleted user is ${index.name}`)
    }
   

}

const updateUser=(req,res)=>{
    let id =req.params.id
    let body =req.body
    let match =user.findIndex(p=>p.id==id);
    if(body.name){
        user[match].name =body.name
        res.json(user)
    }
    else{
        res.json("No changes ")
    }
}




module.exports={getallUser,createUser,getUSer,deleteUser,updateUser}
