const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

const products = [
    {
        id: 1,
        product: "Product1",
        detail: "Sweet product"
    },
    {
        id: 2,
        product: "Product2",
        detail: "Spicy product"
    },
    {
        id: 3,
        product: "Product3",
        detail: " Salty product"
    }
]
app.post("/product",(req,res)=>{
    const  {product,detail} =req.body
    let productId =products.length+1;
 
  let newproduct={productId,product,detail}
 console.log(productId,product,detail);
  products.push(newproduct);
    res.status(201).json(products)

})

app.get('/', (req, res) =>  {
    res.json(products)

})
app.delete("/product/:id",(req,res)=>{
    const productID =parseInt(req.params.id);
    console.log(productID);
    const match =products.findIndex(p =>p.id===productID);
    console.log(match);
    if(match!==-1){
       let deletedProduct= products.splice(match,1)[0];
       console.log(deletedProduct);
       
         
        res.json(`The product is delted of ${deletedProduct.product}`)
    }
    else{
        res.json("Match not found")
    }

})

        app.get("/product/:id",(req,res)=>{
            productid =parseInt(req.params.id);
            let match= products.find(p=>p.id ===productid);
            console.log(match);
            if(match){
                res.status(200).json(`The data of ${productid} id is ${match.product}`)
            }else{
                res.status(404).json(`${productid} is nt found`)
            }

        })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))