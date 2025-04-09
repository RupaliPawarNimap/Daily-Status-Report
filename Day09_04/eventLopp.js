
const fs=require("fs")
setImmediate(()=>{
    console.log("SetImmediate-1");
})
setTimeout(()=>{
    console.log("SetTimeut-1");
},0)
Promise.resolve().then(()=>{
    console.log("Promis-1");
})
fs.readFile("./text.txt","utf8",()=>{
    setTimeout(()=>
    {
        console.log("Settimeout-2");
    },0)
    process.nextTick(()=>{
        console.log("Process nexttik-2");
    })
    setImmediate(()=>{
        console.log("Setimmediate-2");
    })
    console.log("File rading callback");

})
process.nextTick(()=>{
    console.log("process nexttick-1");
})
console.log("Last line of the code");