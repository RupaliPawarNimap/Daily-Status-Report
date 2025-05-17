feedback =[]
exports.addFeedback =(req,res)=>{
   const {users,email} =req.body
   if(!users|| !email){
   return  res.send("Users and Email is manadory")
   }
   else{
    let data ={users:users,email:email};
    feedback.push(data)
    res.status(201).json({msg:"Feedback added Succesulyy",feedabck:feedback})

   }
}