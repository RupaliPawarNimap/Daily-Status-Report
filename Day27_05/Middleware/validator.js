const { response } = require("express");

const validator =(req,res,next)=>{
    let {name,email} =req.body;
    if(!name || !email){
        return res.send("Enter Name and email")
    }
    else{
        next()
    }
}

module.exports =validator
// hfgit addls