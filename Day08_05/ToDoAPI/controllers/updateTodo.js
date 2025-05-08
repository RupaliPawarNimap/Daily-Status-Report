const Todo = require("../models/CreteSchma");

exports.updateTodo = async (req, res) => {
    console.log("Hit")
    try {
        let id =req.params.id;
        const {title,description} =req.body
        let response =await Todo.findByIdAndUpdate(id,{title,description, updatedAt:Date.now()});
        res.status(200).json({
            status:"Success",
            data:response,
            msg:`updated ${id} Succefully`
        })

    }
    catch (err) {
        console.log("Failed To Add Data");
        res.status(500).json({
            status: "Failed",
            data: "Internal server Error",
            
        })

    }


}
