 const multer =require("multer");
 const path=require("path");
const { DATE } = require("sequelize");


 const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"/uploads")
    },
    filename:(req,file,cb)=>{
        let newname=path.extname(file.originalname);
        cb(null,Date.now()+newname)
  
    }
    
 })

const fileFilter =(req,file,cb)=>{
    let allowed =[".pdf",".img"];
    let ext =path.extname(file.originalname);
    if(allowed.includes(ext)){
        cb(null,true)
    }else{
        cb(new Error("File Type Not Valid"),false)
    }

}
 const uploads =multer({
    storage:storage,
    limits:{fileSize:5*1024*1024},
    fileFilter:fileFilter

 })

 module.exports={uploads}
 