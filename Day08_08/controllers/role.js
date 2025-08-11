const { sequelize } = require("../config/db")
const {Role} =require("../models/index")

const createRole =async(req,res)=>{
    try{
let result =await sequelize.transaction(async t=>{
        let {name} =req.body;
        if(!name){
            throw new Error("All fields Are Required")
        }
        let role =await Role.create({name:name},{transaction:t});
        if(!role){
            throw new Error("Failed To create Role")
        }
        return  res.status(201).json({msg:"Role Created",role})
    })
    return result
    }
    catch(err){
        return res.status(500).json("Internal Server Error",err)
    }
     
}

module.exports ={createRole}
