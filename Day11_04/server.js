    const http =require("http");
    const server =http.createServer((req,res)=>{
        // res.write("Hello");
        let url=req.url
        // res.end();
        res.setHeader("content-type","text/plain")
        if(url==="/"){
            res.write("ur on home page")
            res.end();
        }
        else if(url==="/about"){
            res.write("ur own about")
            res.end()
        }
        else{
            res.write('Page not found');
            res.end()
        }
    })
    server.listen(8000,()=>{
        console.log("Listening on port 8000");
    })