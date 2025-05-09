 const Post =require("../models/postModel");
 const Like =require("../models/likeModel");


exports.likeController =async (req,res)=>{
    try{
        const {post,user} =req.body
        const saveLike =await Like.create({post,user});
        const updatePost =await Post.findByIdAndUpdate(post,{$push:{likes:saveLike._id}},{new:true}).populate("likes").exec();
         res.status(200).json({
            status:"Sucesss",
            like:updatePost
         })
    }
    catch(err){
        res.status(500).json({
            status:"failed",
            like:"Fail to Like"
        })

    }
   
}

exports.unlikeController =async (req,res)=>{
    try{
        const {post,like} =req.body;
        const deleteLike =await Like.findByIdAndDelete(like);
        console.log(deleteLike)
        if(!deleteLike){
            res.status(404).json("Failed To Find Like")
        }
        const updatePost =await Post.findByIdAndUpdate(post,{$pull:{likes:deleteLike._id}},{new:true}).populate("likes").exec()
        res.status(200).json({
            status:"Success",
            data:updatePost
        })

    }
    catch(err){
        console.log(err.message);
        res.status(500).json("Failed To Unlike")

    }
}