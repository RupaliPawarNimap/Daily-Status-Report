const { sequelize } = require("../config/db");
const {File} =require("../models/fields");
const fs =require("fs")

const uploadFile=async(req,res)=>{
    try{
        let result =await sequelize.transaction(async(t)=>{
               let file =await File.create({
                resume:req.files.resume?req.files.resume[0].path:null,
                profilePic:req.files.profilePic?req.files.profilePic[0].path:null,
                img:req.files.img?req.files.img[0].path:null},{transaction:t})
                if(!file){
                    throw new Error("Failed To Upload")
                }
                if(req.query.files =="true"){
                    throw new Error("By defult")
                }
                return file

        })
        return res.status(201).json({msg:"File Uploaded Successfully",file:result})
      
    }
    catch(err){
       if (req.files) {
            Object.values(req.files).forEach(fileArray => {
                fileArray.forEach(fileObj => {
                    if (fs.existsSync(fileObj.path)) {
                        fs.unlinkSync(fileObj.path);
                        console.log(`Deleted file: ${fileObj.path}`);
                    }
                });
            });

        return res.status(500).json({msg:"something Went Wrong",err:err.message})

    }
}
}

module.exports ={uploadFile}