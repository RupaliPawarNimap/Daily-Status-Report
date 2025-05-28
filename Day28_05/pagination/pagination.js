const User =require("../models/employeemodel");


exports.paginateEmployee =async(req,res)=>{
    try{
    let page =parseInt(req.query.page)||1
    console.log(page);
    let limit =parseInt(req.query.limit)||5
    console.log(limit);
    let offset =(page-1)*limit
    console.log(offset);
    let paginate =await User.findAll({
        limit:limit,
        offset:offset
    })
    console.log(paginate);

    res.status(200).json({
        page:page,
        limit:limit,
        offset:offset,
        paginate:paginate
    })
    }
    catch(err){
        res.status(400).json({msg:"Something Went Wrong",err:err.message})
    }
   
 
}