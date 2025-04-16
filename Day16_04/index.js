let http=require("http");
let fs =require("fs")
let url =require("url")
let server =http.createServer((req,res)=>{
    // console.log(req.url);
    // res.end("hello")
    let log=`${Date.now()}: ${req.url} Reqeceived\n`;
    if(req.url==="/favicon.ico") return res.end();
    let myurl =url.parse(req.url,true);
    console.log(myurl);
    console.log(myurl.pathname);
    fs.appendFile("log.txt",log,(err,data)=>{
        console.log("File updated");
        // res.end("Hello Check ur file    ")
        switch(myurl.pathname){
            case "/":res.end("ur on home page");
            break;
            case "/about": 
         const username =myurl.query.myname;
            console.log(username);
            res.end( `hello,${username}`)
            break;
            default:res.end("Not found")
        }
    })


})
server.listen(8000,()=>{
    console.log("listening n port 8000");
})