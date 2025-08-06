const {Course, User}=require("../models/index");


const createCourse =async(req,res)=>{
    try{
        let {c_name,price} =req.body;

        let course =await Course.create({c_name,price});
        return res.status(201).json({msg:"Course Added ",course})
    }
    catch(err){
         return res.status(500).json({msg:"Internal Server Error",err})
    }
}

const getCourse  =async(req,res)=>{
    try{
      

        let course =await Course.findAll({
            include:[
                {
                    model:User,
                    attributes:["name"]

                }
            ]
        });
        return res.status(200).json({msg:"Course Fetched ",course})
    }
    catch(err){
         return res.status(500).json({msg:"Internal Server Error",err})
    }
}

module.exports ={getCourse,createCourse}