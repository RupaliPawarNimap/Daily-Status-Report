const fs =require("fs");
const dataAppend =(req,res,next)=>{
    fs.appendFile("lg.txt",`{${req.method},${req.path},${new Date().toISOString()}} `,(err,data)=>{
        if(err){
         return   res.send("Unable to add data")
        }
        else{
            console.log(data);
             next()
        }
        
    })
}
module.exports =dataAppend