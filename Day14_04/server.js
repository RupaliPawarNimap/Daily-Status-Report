const express = require('express')
let path = require("path")
const app = express()
const methodOverride = require('method-override');
 
const { v4: uuidv4 } = require('uuid');
app.use(methodOverride('_method'));
 
const port = 3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
let posts = [{
    id:uuidv4(),
    username: "Rupali",
    content: "Work hard one day u will make it "
},
{
    id:uuidv4(),
    username: "naman",
    content: "I got my first internship in Google "
},
{
     id:uuidv4(),
    username: "Simarn",
    content: " Doing BHMS in reputed clg "
},

]

app.get("/posts", (req, res) => {
    // res.json(posts)
    res.render("index.ejs",{posts})
})
app.get("/posts/new",(req,res)=>{
// res.json(posts)
    res.render("new.ejs")
    
    
})
app.post("/posts",(req,res)=>{
    // res.send("the data is sumbitted")
    // res.render(req.body)
    // console.log(req.body);
    // id =parsseposts.length+1
    id=uuidv4();
    let {username,content} =req.body;
    let data ={id,username,content}
    console.log(id,username,content);
    posts.push(data)
    res.redirect("/posts")
    // res.render(posts)

})
app.patch("/posts/:id",(req,res)=>{
    let postid =req.params.id; 
    console.log(postid);
    let newcontent =req.body.content
    let post =posts.find(p=>p.id ===postid);

    post.content=newcontent
    console.log(postid.content);
    res.redirect("/posts")
    // res.send("request working")
})
app.get("/posts/:id",(req,res)=>{
    let postid =req.params.id;
    console.log(postid);
    let post =posts.find(p=>p.id ===postid);
    console.log(post);
    // res.send("request working");
    res.render("getdata.ejs",{post})
})

app.get("/posts/:id/edit",(req,res)=>{
    let postid =req.params.id;
    // console.log(postid);
    let post =posts.find(p=>p.id ===postid);
    
    res.render("edit.ejs",{post})
})
app.delete("/posts/:id",(req,res)=>{
    let postid =req.params.id;
    // console.log(postid);
    posts =posts.filter(p=>p.id !==postid);
    res.redirect("/posts")

})
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))