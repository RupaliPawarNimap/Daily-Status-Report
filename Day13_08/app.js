const cookieParser=require("cookie-parser");
const express =require("express");
const app =express();

app.use(cookieParser())
app.use(express.json())
app.get("/set-cookie",(req,res)=>{
    res.cookie("name","Rupali",{
        httpOnly:true,
        secure:false,
        sameSite:"strict",
        maxAge:1000*60*60
    })
    res.send("cookie has beed set")
})

app.get("/get-cookie",(req,res)=>{
    let name =req.cookies.name
    let {token} =req.query
    if(token){
        return res.send("cookie exist")
    }
    if(name){
        res.send("cookie exist")
    }
    else{
        res.send("cookie not found")
    }
})
app.get("/delete",(req,res)=>{
    res.clearCookie("name");
    res.send("cookie deleted Successfully");
})

app.listen(4000,()=>{
    console.log("Working");
})

app.post("/add",(req,res)=>{
    let {token} =req.body;
    console.log(token);
    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        maxAge:1000,
        sameSite:"strict"

    })

    res.send(`cookie ${token} has set Successfully`)
})

app.post("/set-from-user", (req, res) => {
    const { name, role } = req.body;
    res.cookie("username", name, { maxAge: 1000 * 60 * 60, httpOnly: true });
    res.cookie("role", role, { maxAge: 1000 * 60 * 60, httpOnly: true });
    res.send("Cookies set from user data");
});