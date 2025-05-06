let arr =[]
const data =(req,res)=>{
    let {data} =req.body
    arr.push(data)
}
const getdata =(req,res)=>{
    res.send(arr)
}
module.exports ={data,getdata}