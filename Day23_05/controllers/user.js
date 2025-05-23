const { users } = require("../data/users")

exports.getUsersById = (req, res) => {
    let id = req.params.id;
    let data = users.find(p => p.id = id);
    if (!data) {
        res.status(400).json({ msg: "User Not Exist" })
    }
    else {
        res.status(200).json({
            msg: "Fetched Succesfully",
            user: data
        })
    }
}
exports.createUser = (req, res) => {
    let { name, email } = req.body;
    let data = { id: users.length + 1, name: name, email: email };
    console.log(data);
    users.push(data)
    res.status(201).json({ msg: "Created user succefully", user: data })
}

exports.getUsers = (req, res) => {
    if (users.length == 0) {
        return res.status(400).json({ msg: "Users are not Available" })
    }
    res.status(200).json({ msg: "Data Of All Users", data: users })
}

exports.updateUser= (req, res) => {
    let { name, email } = req.body;
    let id = req.params.id;
    let user = users.findIndex(p=>p.id==id)
    if(user==-1){
        res.status(500).json({msg:"User not exist"})
    }
    else{
        users[user] ={id:Number(id),name,email};
        res.status(200).json({msg:"Updated user",data:users[user]});
    }

    


}

exports.deleteuser = (req, res) => {
    let id = req.params.id;


    let user = users.find(p => p.id = id);
    if (!user) {
        return res.status(400).json({ msg: "User not Exist" })
    }
    else{
        let deletedUser =users.splice(user,1)
        console.log(deletedUser);
      return  res.status(400).json({msg:"User deleted succefully",UserDeleted:deletedUser})
    }



}