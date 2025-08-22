    const {generateToken} =require("../services/authservices");


    const authservice =(req,res)=>{
        try{
            let token =generateToken(req.user);
            res.status(200).json({
                msg:"MITID Creted Succesfulyy",
                user:req.user,
                token
            })
        }
        catch(err){
            return res.status(500).json({msg:"Internal Server Error",err:err.message})
        }
    }

    module.exports ={authservice}