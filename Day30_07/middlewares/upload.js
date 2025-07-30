const multer =require("multer")
const path =require("path")


 let storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        let newfilename =Date.now()+'-'+Math.round(Math.random()+1E9);
        cb(null, newfilename+path.extname(file.originalname))
    }
 })


let limit =2*2*1024;
let filefilter =(req,file,cb)=>{
    let allowedfileds =[".pdf",".txt",".jpg",".jpeg",".png"];
    let ext =path.extname(file.originalname);
    if(allowedfileds.includes(ext)){
        cb(null,true)
    }
    else{
        cb(new Error("only pdf,txt and images are allowed "))
    }
}


let upload =multer({storage:storage,limits:limit,fileFilter:filefilter})


module.exports ={upload}