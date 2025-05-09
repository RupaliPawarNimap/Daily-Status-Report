const Post = require("../models/postModel");

exports.createPost = async (req, res) => {

    try {
        const { title, body } = req.body;
        const response = await Post.create({ title, body });
        res.status(200).json({
            status: "Success",
            Data: response
        })
    }
    catch (err) {
        
        res.status(500).json({
            msg: "Internal Server Erro"
        })
    }
}
exports.getPosts = async (req, res) => {
    try {
        const response = await Post.find({}).populate("likes").populate("comment");
        console.log(response)
        if (!response) {
            res.json("Data not found");
        }
        else {
            res.status(200).json({
                status: "Success",
                Data: response
            })

        }
    }
    catch (err) {
        console.error(err.message);
        res.status(500).json({
            msg: "Internal Server Erro"
        })

    }


}