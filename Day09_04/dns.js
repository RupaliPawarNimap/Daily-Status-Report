let dns =require("dns");
const { hostname } = require("os");
let domain="chatgpt.com"
dns.resolve(domain,"A",(err,add)=>

{
    if(err){
        console.log("Err occured",err.message);
    }
    else{
        console.log("IP address is found",add2)

    }
})

// let ip='104.18.32.47'
let ip="8.8.8.8"
dns.reverse(ip,(err,hostnames)=>{
    if(err){
        console.log("err is: ",err.message);
    }
    else{
        console.log("Hostename is: ",hostnames);
    }
})


dns.lookup(domain,(err,add,family)=>{
    if(err){
        console.log("Err is: ",err.message);
    }else{
        console.log("The hostenam is: ",add);
        console.log("The faily is",family);
    }
})