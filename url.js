const { nanoid } = require("nanoid");
const Url = require("../models/urlModel");
exports.ShortUrl = async (req, res) => {
    try {
        const { originalUrl} = req.body
        if (!originalUrl) {
            res.status(400).json({
                msg: "Bad Request Enter Url"
            })
        }
        const shortId = nanoid(10);
        console.log(shortId)
      const  newurl = await Url.create({
            originalUrl:originalUrl,
            shortId: shortId
        });
        res.status(200).json({
            status:"Success",
            shortId:newurl.shortId
        })
    }
    catch(err){
        res.status(500).json({
            msg:"Internal server Error"
        })
    }
    
    
}

exports.redirectToOriginal =async(req,res)=>{
    try{
    const  shortId=req.params.shortId;
    
    let url =await Url.findOne({shortId});
     if(!url){
        res.send("Not Exist")
    }
    return res.redirect(url.originalUrl)
    }
    catch(Err){
        res.send(Err)
    }
 
    
}