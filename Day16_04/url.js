let url =require("url");
let http =require("http")
let server =http.createServer((req,res)=>{
    res.end("hello")
    let myurl = url.parse("http://localhost:3000/?mynme=%22Rupali%22",true);
    console.log(myurl);
})
server.listen(3000,()=>{
    console.log("Sserver listening on port 3000");
})
 