const fs=require("fs");
let os =require("os")
console.log(os.cpus().length);
 fs.writeFileSync("./text.txt","Hello I am adding new cntent ");
 fs. readFile("./async.txt","utf-8",(err,res)=>{
    if(err){
        console.log("Error is",err);
    }
    else{
        console.log(res);
    }
 })
 fs.appendFile('./txet.txt',"This is the content we are appended",(err,res)=>{
    if(err){
        console.log("The error occured",err);

    }
    else{

        console.log("the data is added");
    }
 })

 fs.stat("./text.txt",(err,stat)=>{
    if(err){
        console.log("error in getting the data");
    }
    else{
        console.log(stat);
    }
 })

 fs.unlink("./txet.txt",(err,del)=>{
    if(err){
        console.log("File not found");
    }
    else{
        console.log("File deleted successfully!");
    }
 })
 //the async operation are non blocking they will never block the execution sso the
 //readfile is async code which always takes the callbacks 