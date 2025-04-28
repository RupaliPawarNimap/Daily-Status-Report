let express =require('express');
const app =express();
const controllers =require("./controllers/user")
app.use(express.json()  )

let port=3000;
app.get("/user",controllers.getallUser)
app.post("/user",controllers.createUser)
app.get("/user/:id",controllers.getUSer);
app.delete("/user/:id",controllers.deleteUser)
app.put("/user/:id",controllers.updateUser)

app.get("/",(req,res)=>{
    res.send("Hello World!")
})

app.get('/search', (req, res) => {
    const { query, page } = req.query;  // Extract query and page parameters from req.query
    res.send(`You searched for: ${query} on page ${page}`);
});

app.listen(port,()=>{
    console.log("Listening");
})