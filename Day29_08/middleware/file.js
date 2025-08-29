// const multer =require("multe")
const express=require("express")
const app =express();
const multer=require("multer");
const path=require("path")

let storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        // cb(null,"uploads/")
        cb(null,"")
    },
    filename:(req,file,cb)=>{
        let newname =path.extname(file.originalname);
        cb(null,Date.now()+"_"+newname)
    }
});



const uploads=multer({
    storage,
    limits:{fileSize:5*1024*1024},
    

})

app.post("/profile",uploads.single("file"),(req,res)=>{
    return res.send("uploaded")
})

app.get("/",(req,res)=>{
    res.send("hello")
})
const port=4000;
app.listen(port,()=>{
    console.log("Listening");
})
 