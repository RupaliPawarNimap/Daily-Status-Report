const express = require('express')
const app = express();
const port = 3000;
let arr = [];
let id = 1;
 
function validation(task,status,res){
   if(!task||typeof(task)!=="string"||task.trim()===""){
      return  res.status(400).json("Task Must be Valid String")
    }
    if( typeof(status)!=="boolean"){
       return  res.status(400).json("Status Must be boolean value")
    }
}

app.use(express.json())
app.get("/todos", (req, res) => {
   res.json(arr)
})
app.get("/todos/completed",(req,res)=>{
   let cmpTo =arr.filter((cmp)=>{
    return  cmp.status===true
   })
   console.log(cmpTo);
   res.json(cmpTo)
  
   
})
app.get("/todos/:id", (req, res)=>{
   let id =parseInt(req.params.id);
   let index =arr.find(p=>p.id===id);
   if(!index){
     return res.json("Not Found Todo")
   }
    res.json(index)
})
app.post("/todos", (req, res) => {
   let {task,status} = req.body;
   let err =validation(task,status,res)
   if(err) return;
   let newdata = {
      id: id++,
      task: task,
      status: status,
      date:Date().toString()
   }
 
    
   arr.push(newdata)
   res.status(201).json(newdata);
})
app.put("/todos/:id", (req, res) => {
   let {task,status}=req.body
   let id = parseInt(req.params.id);
   console.log(id);
   let index = arr.findIndex((p) => p.id === id);
   if (index !== -1) {
      let err =validation(task,status,res)
      if(err) return
      // if(err) {
      //    console.log("not updated anyting");
         
      // };

      arr[index].task = req.body.task || arr[index].task;
      arr[index].status = req.body.status || arr[index].status;
      arr[index].date = Date().toString()
       

     return res.status(200).json({msg:"Todo Updated", arr:arr[index]})
   }
   else {
      return res.status(404).json("Todo Not Found")
   }
    

})

app.delete("/todos/:id", (req, res) => {
   let id = parseInt(req.params.id);
   let index = arr.findIndex((p) => p.id === id);
   if(index!==-1){
      let deletedTodo = arr.splice(index, 1)
      console.log("Deleted To", deletedTodo);
      res.status(200).json({msg:"Todo Deleted",DeleteArr:deletedTodo})
   }
   else{
      res.status(404).json("Todo Not Found")
   }
  
})

 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))