const http=require("http");
const server =http.createServer((req,res)=>{
    // res.write("Hello my frst node js server")
    if(req.url==="/about"){
        res.write("This is about page")
    }
    res.end("Hello")
})
server.listen(7777,()=>{
    console.log("Server is listening on port 7777");
})