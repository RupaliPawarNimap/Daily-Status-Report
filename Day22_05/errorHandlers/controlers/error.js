exports.syncError = (req, res) => { 
      res.send("uncaughtException Occured")       // ✅ Now truly synchronous
  throw new Error("Sync error occurred");
 
};


exports.asyncError=(req,res)=>{
      new Promise((resp,rej)=>{
        rej("error occured")
         
      })
      res.send("async error")
 
    
    
}

