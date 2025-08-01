const checkLogin =async(req,res,next)=>{
    if(req.session.username){
        next();
    }
    else{
        return res.status(400).json({msg:"Dont have Access"})
    }
}

module.exports ={checkLogin}