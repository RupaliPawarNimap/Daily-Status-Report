const express =require("express");
const router=express.Router();
const {createProduct,getProduct,getProductById,UpdateProductById,DeleteProductById} =require("../controllers/productController")



router.get("/products",getProduct);
router.get("/products/:id",getProductById);
router.post("/products",createProduct);
router.delete("/products/:id",DeleteProductById);
router.put("/poducts/:id",UpdateProductById)


module.exports =router