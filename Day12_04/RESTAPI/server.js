const express =require("express");
const app =express();
let path =require("path")
let port =3000;
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))
app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json())
let posts =[
    {
        username :"Rupali",
        city:"Solpaur"
    },
    {
        username :"Ruman",
        city:"Mumbai"
    },
    {
        username :"Simran",
        city:"Sangli"
    }
]

app.get("/",(req,res)=>{
let {data} =req.query;
console.log(data);
    res.send("server is working well!!")
});

app.get("/posts",(req,res)=>{
    let {data} =req.query;
    console.log(data);
        res.render("index.ejs",{posts})
        console.log({posts});
    });
app.get("/posts/new",(req,res)=>{
    res.render("")
})

    // app.post("/posts",(req,res)=>{
    //     let {username,city}=req.body;
    //     console.log(username,city);
        
    //     posts.push({username,city})
    //     res.redirect("/posts")
    //     // res.render("index.ejs",{posts.push(username)})
    // })
app.listen(port,()=>{
    console.log(`Listenig on port ${port}`);
})
