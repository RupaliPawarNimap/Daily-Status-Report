const {Product} =require("../models/productModel");


exports.createProduct=async(req,res)=>{
    try{
        let product =await Product.create(req.body);
        if(product.length==0){
          return  res.status(400).json("Add the Products")
        }
        return res.status(201).json({msg:"Product Created Succefully",product:product})

    }
    catch(err){
        res.status(500).json({msg:"Internal server error",err:err.message});
    }

}

exports.getProduct=async(req,res)=>{
    try{
        let product =await Product.findAll();
        if(product.length==0){
          return  res.status(400).json("Add the Products")
        }
        return res.status(201).json({msg:"Product Fetched Succefully",product:product})

    }
    catch(err){
        res.status(500).json({msg:"Internal server error",err:err.message});
    }

}
exports.getProductById=async(req,res)=>{
    try{
        let product =await Product.findByPk(req.params.id);
        if(product.length==0){
          return  res.status(400).json("Product Not Found")
        }
        return res.status(201).json({msg:"Product Fetched Succefully",product:product})

    }
    catch(err){
        res.status(500).json({msg:"Internal server error",err:err.message});
    }

}

exports.UpdateProductById=async(req,res)=>{
    try{
        let product =await Product.findByPk(req.params.id);
        if(product.length==0){
          return  res.status(400).json("Product Not Found")
        }
        let update =product.update(req.body)
        return res.status(201).json({msg:"Product Updated Succefully",product:update})

    }
    catch(err){
        res.status(500).json({msg:"Internal server error",err:err.message});
    }

}

exports.DeleteProductById=async(req,res)=>{
    try{
        let product =await Product.findByPk(req.params.id);
        if(product.length==0){
          return  res.status(400).json("Product Not Found")
        }
        let update =product.destroy(req.body)
        return res.status(201).json({msg:"Product Deleted Succefully"})

    }
    catch(err){
        res.status(500).json({msg:"Internal server error",err:err.message});
    }

}