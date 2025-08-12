const express =require("express");
const app =express();
const multer =require("multer")
const route =require("./routes/filed")
const path =require("path")
const {dbconnect, sequelize} =require("./config/db");
const { SFile } = require("./models/single");
const fs =require("fs");
 
const port =3000
dbconnect()
const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    }
    ,
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname))
    }
})

const limits ={
    fileSize:1024*1024*5
}

const filefilter =(req,file,cb)=>{
    let allowedfiles =[".pdf",".png",".txt",".jpeg"]
    if(allowedfiles.includes(path.extname(file.originalname))){
        cb(null,true)
    }
    else{
        cb("File Type is Not Valid" ,false)
    }
}

const upload =multer({
    storage:storage,
    limits:limits,
    fileFilter:filefilter
})

app.post("/single",upload.single(["files"]),async(req,res)=>{
    try{
let result =await sequelize.transaction(async(t)=>{
           let file =await SFile.create({
    filepath:req.file.path
   },{transaction:t});;
   if(!file || file.length==0){
    throw new Error("File Not Uploaded")
   }
   if(req.query.file=="true"){
    throw new Error("Failed To Upload ")
   }
   return file  
    })
    console.log(result);
    return res.json({msg:"File Upload Successfully",file:result})
    }
    catch(err){
        if(req.file && fs.existsSync(req.file.path)){
            fs.unlinkSync(req.file.path);
            console.log("Deleted Uploaded File Due To Rollback");
        }
        return res.json({msg:"Something went Wrong",err:err.message})
    }
     
 
})
app.use("/api",route)

app.get("/",(req,res)=>{
    return res.send("Hello World")
})
app.listen(port,()=>{
    console.log("Working");
})