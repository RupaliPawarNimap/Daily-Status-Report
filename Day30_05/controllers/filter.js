const {Op} =require("sequelize")
const {Product} =require("../models/productModel")

exports.filterByname =async(req,res)=>{
    try{
    const products = await Product.findAll({
      where: {
        name: {
          [Op.like]: `${req.query.name}%`  // Match names starting with the input
        }
      }
    });
        res.status(200).json({msg:"Filterd by name successfully",product:products})
    }
    catch(err){
        res.status(500).json({msg:"Something Went Wrong",err:err.message})
    }
}

exports.filterMultiple =async(req,res)=>{
    try{
        const {name,category,pricemax,pricemin} =req.query

        let whereCondition ={
            ...(name &&{name:{  
                [Op.like]:`${name}%` }}),
            ...(category&&{category:category}),
            ...(pricemin,pricemax&&{price:{
                [Op.between]:[pricemin,pricemax]
            }})
        }
        let products =await Product.findAll({where:whereCondition})
        if(products.length==0){
          return res.status(400).json({msg:"Product not Founded"}) 
        }
        return res.status(200).json({msg:"Product Founded",product:products})
    }
    catch(err){
        res.status(500).json({msg:"Somethng went Wrong",err:err.message})
    }
}