let users =[]
let id =1
//To Get the all users
exports.getusers =(req,res)=>{
    res.status(200).json({msg:"All userd are ",user:users} )
    console.log("Working Well",users);

}
//To create new user
exports.createUSers = (req, res) => {
    let { name, email } = req.body;
    const newuser = { id: id++, name, email };  // No need to use parseInt()
    users.push(newuser);
    res.status(201).json({ msg: "New User added", user: newuser });
}


//To get a user by there ID
exports.getUSerById =(req,res)=>{
    let { id } = req.params;
    id = parseInt(id);
    let idFind =users.find((p)=>p.id===id);
    console.log(idFind);
    if(!idFind){
        res.status(404).json("User not found")
    }
    res.status(200).json({msg:"user is found" ,user:idFind})
}

//To update existing data
exports.updateUser=(req,res)=>{
    let { id } = req.params;
    id = parseInt(id);
    let {name,email} =req.body;
    console.log(name,email);
    let findUser =users.find((p)=>p.id===id);
    console.log(findUser);
    if(!findUser){
        res.json("USer not found")
    }
    findUser.name =name||findUser.name;
     findUser.email =email||findUser.email
    res.json({msg:"Data updated  ",user:findUser})
}


//To delete the user    
    exports.deleteUser=(req,res)=>{
    let id =req.params.id;
    let newid =parseInt(id)
    let index =users.findIndex((p)=>p.id ===newid);
    if(index===-1){
        res.json("USer not found")
    }
   let deleteduser= users.splice(index,1);
    res.json({msg:"Deleted user",user:deleteduser});
    console.log(deleteduser);
    }

