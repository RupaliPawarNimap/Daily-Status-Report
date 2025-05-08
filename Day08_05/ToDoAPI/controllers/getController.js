const Todo = require("../models/CreteSchma")
exports.getTodo = async (req, res) => {
    try {
        const response = await Todo.find({});
        res.status(200).json({
            status: "Success",
            Data: response,
            msg: "Data fetched Succesfully"
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            status: "Failed",
            data: "Internal server Error",
            msg: "Failed To get  "
        })

    }
}
exports.getToById = async (req, res) => {
    try {
        const id = req.params.id;
        let response = await Todo.findById({ _id: id })
        if (!response) {
            res.status(404).json({
                status: "Failed",

            })
        }
        else {
            res.status(200).json({
                status: "Data fetched Succesfully",
                msg: `the data ${id} fetched succesfully`,
                data:response

            })
        }

    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            status: "Failed",
            data: "Internal server Error",
            msg: "Failed To get  "
        })

    }
}