const Post =require("../models/postModel");
const Comment =require("../models/commentmodel")
exports.createComment =async(req,res)=>{
    try{
        const  {post,user,content} =req.body;
        const saveComment =await Comment.create({post,user,content})
        const  updatePost =await Post.findByIdAndUpdate(post,{comment:saveComment._id},{new:true}).populate("comment    ")
      res.status(200).json({
          status:"Success",
          data:updatePost
      })
    }
    catch(err){
        console.error(err);
        res.status(500).json("Fetching Comment Failed")

    }
 

}