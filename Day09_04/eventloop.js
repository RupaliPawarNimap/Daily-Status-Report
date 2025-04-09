const fs =require("fs")
const a=100
console.log("this is first");
setImmediate(()=>{
    console.log("Setimmediate function");
})
Promise.resolve().then(()=>{
    console.log("Promise resolved");
})
fs.readFile("./text.txt","utf8",(res)=>{
    console.log("This is file reading");
})

setTimeout(()=>
{
    console.log("SEtTimeoit function");
},0)
process.nextTick(()=>
{
    console.log("Process nextTick method");
})

function read(){
    console.log("a",a);
}
read()
console.log("This is last line");