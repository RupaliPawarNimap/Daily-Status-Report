const multer =require("multer")
const path =require("path")
const storage =multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname));
    }
})

const limits={fileSize :1024*1024*5};


const fileFilter =(req,file,cb)=>{
    let allowedfiles={
 resume :[".pdf",".doc",".xlsx"],
    profilePic:[".png",".jpeg"],
    img:[".jpeg",".png"]
    }
     
    if(allowedfiles[file.fieldname] && allowedfiles[file.fieldname].includes(path.extname(file.originalname).toLowerCase())){
        cb(null,true)
    }else{
        cb(new Error(`Invalid File Type for ${file.fieldname} AllowedFiled:${allowedfiles[file.fieldname]}`),false)
    }
}

const upload =multer({storage:storage,limits:limits,fileFilter:fileFilter})

module.exports ={upload}