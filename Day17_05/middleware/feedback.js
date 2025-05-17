const userLastSubmmision ={};


exports.timelimit =(req,res,next)=>{
        const userId =req.body.email||req.ip;
        console.log(userId);
        let now = Date.now()
        const lastSubmision =userLastSubmmision[userId];
        console.log("lastsumbission",lastSubmision);
        if(lastSubmision){
            let diff =(now-lastSubmision)/1000/60;
            console.log(diff);
            if(diff<5){
              return  res.send("Wait for some time ur access denied for while")
            }
           
        }
         userLastSubmmision[userId]=now
        next()
}