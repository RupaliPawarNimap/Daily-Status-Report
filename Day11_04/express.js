const express =require("express");
const app=express()
let port =3000;

// app.get("/",(req,res)=>{
//     res.send("I am on hme page")
// })
// app.get("/:username/:id",(req,res)=>{
//     const{username,id}=req.params;

//     let data=`<h1>welcome to the page ${username}</h1>`
//     res.send(data)
//     // con
//     // sole.log("err");
// })
// app.use((req,res)=>{
//     res.status(404).send("PAge not found")
// })
// app.listen(port,()=>{
//     console.log("Listening on port 3000");
// })



app.listen(port,()=>{
    console.log("app listening on port 3000");
})

app.get("/",(req,res)=>{
    res.send("I am on home page")
})
// app.get("/:username",(req,res)=>{
//     const {username}=req.params;
//     res.send(`<h1>This is the page for ${username}</h1>`)
// })

let arr=[1,2,3,4,5];

app.get("/prime",(req,res)=>{
    function prime(num){  
        if (num<2){
            console.log("num is not prime");
            
     }
        for(let i=2;i<num;i++){
    
            
             if(num%i===0){
               return false
            }   
        }    
        return true
    }  
    
    let primearr =[]
    for(let i=0;i<arr.length;i++){
        if(prime(arr[i]) && arr[i]!==1) {
            primearr.push(arr[i])
        }     
    }
     res.send(`Prime no is ${primearr}`)
    
})


app.get("/:add/:id",(req,res)=>{
    let {ele,id} =req.params;
    let data =arr.push(id)
    // console.log(ele);
    console.log(data);
    res.send(`Array is updated: ${arr}`)
})


app.get("/reverse",(req,res)=>{
let data =arr.reverse()
res.send(data)
})