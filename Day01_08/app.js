const express =require("express");
const app =express();
const cookieParser =require("cookie-parser");

app.use(express.json())
app.use(cookieParser())
app.post("/set-cookie",(req,res)=>{
    let {key,val} =req.body;
    if(!key || !val){
        return res.status(400).json({msg:"All Fields are Required"})
    }

    let data =res.cookie(key,val,{
        maxAge:1000*60*60,
        secure:false,
        httpOnly:false,
        signed:false
    })

    if(!data){
        return res.status(400).json({msg:"Failed To create Cookie"})
    }
    
    return res.status(201).json({msg:"cookie created successfully"})

})


app.get("/get-cookie",(req,res)=>{
    let cookie =req.cookies
    
    if(Object.keys(cookie).length===0){
         return res.status(400).json({msg:"Failed"})
         
    }
    else{
        return res.status(200).json({msg:"we Get the REsponse"})
    }
})

app.get("/destroy",(req,res)=>{
    let {key} =req.query;
    
    if(req.cookies[key]){
        return res.status(200).json({msg:"deleted cookie"})
    }
    else{
        return res.status(200).json({msg:"Failed to delete cookie"})
    }
})


app.listen(3000,()=>{
    console.log("working");
})

