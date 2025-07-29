const multer =require("multer");
const express =require("express");
const app =express();
const path =require("path");
const fs =require("fs")



 const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        let newname =Date.now()+path.extname(file.originalname);
        cb(null,newname)
    }

 })
 let filefilter =[
    "pdf"
 ]
 let limit =1024
 let upload =multer({storage:storage,limits:{fileSize:limit},
    fileFilter:(req,file,cb)=>{
        let ext =path.extname(file.originalname).toLowerCase()
        console.log( ext);
        let allowedTypes =[".pdf",".jpg"]
       
        if(allowedTypes.includes(ext)){
            cb(null,true)
        }
        else{
           cb(new Error ("Only jpg and pdf files are allowed"),false)
        }
    }
    
   
 });
  


 app.post("/upload",upload.single("file"),async(req,res)=>{
    try{
        if(!req.file){
            res.send("plz add file")
        }
 console.log(req.file,);
    res.send("file uploded successfully")
    }
    catch(err){
        res.send(err.message)
    }
    

 })


app.listen(3000,()=>{
    console.log("Server running on port 3000")
})
