const {BlockedUser} =require("../models/index");
const {Op} =require("sequelize")

exports.checkBlocked =async(req,res,next)=>{
    try{
        let curretuser =req.user.id
       
        let targetuser = req.body.developer_id;


        if(!targetuser){
            return res.status(404).json({msg:"Target USer is Mandatory"})
        }
        let checkBlock =await BlockedUser.findOne({where:{
            [Op.or]:[{
                blocked_by:curretuser ,blocked_User:targetuser},
                { blocked_by:targetuser ,blocked_User:curretuser}
                
            ]
        }})

        if(!checkBlock){
            next()
        }
        else{
            return res.status(400).json({msg:"U have not Access to crete the Appointement with this user"})
        }

    }
    catch(err){
        res.status(500).json({msg:"Internal Server Error",err:err.message,name:err.name})
    }

}