const Todo = require("../models/CreteSchma")

exports.deleteTodo = async (req ,res) => {
    try {
        const id = req.params.id;
        console.log(id,"and",Todo._id)
        let response = await Todo.findByIdAndDelete({_id:id});
        if (!response) {
            res.status(404).json({
                status: "Failed",
                Msg: "Id Not Found"
            })
        }

        else {
            res.status(200).json({
                status: "Success",
                data: response,
                msg: `${id} Deleted Successfully`
            })
        }

    }
    catch (err) {
        res.status(500).json({
            status: "Failed",
            data: "Internal server Error"
        })
    }

}