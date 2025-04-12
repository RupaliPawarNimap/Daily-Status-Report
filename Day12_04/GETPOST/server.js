const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
let posts = []
let id =1;

app.get('/', (req, res) =>  {
    // res.send("Server is working ")
    res.json(posts)

})
app.post("/",(req,res)=>{
    const {username,city} =req.body;
const data={id:id++,username,city}
    posts.push(data)
    res.json(data)
   
})
app.get("/posts/:id",(req,res)=>{
    let postid =parseInt(req.params.id);
    let index =posts.find(post=>post.id==postid);
   res.json(index)
    
    
})
app.delete("/posts/:id",(req,res)=>{
    let postID =parseInt(req.params.id)  ;
    let index =posts.findIndex(post=>post.id==postID);
    if(index!==-1){
        posts.splice(index,1)
        console.log(`the post is deleted ${index} `);
    }
    else{
        console.log(`The Id is not valids`);
    }
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))