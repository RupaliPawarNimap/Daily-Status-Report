const { User } = require("../models/utilitymodels")
const {Op, where} =require("sequelize")

exports.utilitiMethod = async (req, res) => {
    try {

        let user = await User.count({
            where: {
                id: {
                    [Op.lt]:5
                }
            }
        })
        
    if(user ==0){
      return  res.json({msg:"Data not  Found "})
    }
   return  res.json({msg:"Data Found ",user:user})

    }
    catch (err) {
       return res.json({msg:"Somethig went wrong",err:err.message})

    }

}

exports.sumId =async(req,res)=>{
    try{
        let sumage =await User.sum("age");
        let maxage =await User.max("age");
        console.log("maxage",maxage);
        let minage =await User.min("age")
        let alluser =await User.count({where:{id:{[Op.gt]:4}}})
        let increm =await User.increment({age:2},{where:{id:1}})
        let {count,rows} =await User.findAndCountAll({where:{age:{[Op.gt]:25}},limit:2,offset:1 })
        console.log("count",count,rows,"rows");
        res.json({maxage:maxage,minage:minage,sumage:sumage,alluser:alluser,rows:rows,count:count})

    }


    catch (err) {
       return res.json({msg:"Somethig went wrong",err:err.message})

    }
}

exports.findAll =async(req,res)=>{
    try{
let user =await User.findAll();
res.send(user   )
console.log(user);
    }
    catch(Err){

    }
}