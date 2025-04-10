const fs =require("fs");
// const cpy =fs.copyFile("./","./os.js")
const data=fs.readdir("./",(err,res)=>{

    if(err){
        console.log("error",err);
    }
    console.log("Result",res);
    // console.log('file is reaing')
})
// console.log(cpy);
// console.log(data);

