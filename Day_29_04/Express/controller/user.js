const express =require("express");
let app =express()
let user =[];
let id =1
const createUser =(req,res)=>{
    let body =req.body;
    console.log(body);
     let newdata ={id:id++,...body}
     user.push(newdata)
     res.send(user  )
     console.log(user);

}
const getuser =(req,res)=>{
 if(user==[]){
    res.status(200).json(user)
 }
 else{
    res.status(404).json("User not found")
 }
}

const getUserId =(req,res)=>{
    let id =req.params.id;
   let match =user.find(p=>p.id==id);
   if(!match){
    res.json("User not found")
   }
   else{
    res.status(200).json(match)
   }
}
const deleteUser =(req,res)=>{
    let id =req.params.id;
    let match =user.find(p=>p.id==id);
    if(!match){
        res.json("Match not Found")
    }
    else{
        let deleted = user.splice(match,1)
        res.status(200).json(`user deleted ${deleteUser}`)
    }

}
module.exports ={createUser,getuser,getUserId,deleteUser}