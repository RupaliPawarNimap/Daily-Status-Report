const express =require("express");
const app =express();
const nodemailer =require("nodemailer");

const port =3000;

let arr =["roopapowar221@gmail.com","rohanhakke9158@gmail.com"]
const transporter =nodemailer.createTransport({
    host:"smtp.gmil.com",
    service:"gmail",
  
    secure:false,
    auth:{
        user:"rupali.pawar@nimapinfotech.com",
        pass:"tbuxbhxqbtkqagpi"
    },
    tls:{
        rejectUnauthorized:false
    }
})

function chunckarr(arr,size){
    let res =[];
    for(let i=0;i<arr.length;i+=size){
        res.push(arr.slice(i,i+size));
    }
    return res
}

async function submitEmailInBatches(arr,bactch){
    try{
 let batches =chunckarr(arr,bactch);
   for(let batch of batches){
    let promises =await batch.map((email)=>{
        transporter.sendMail({
            to:email,
            from:"rupali.pawar@nimapinfotech.com",
            subject:"Hey",
            text:"Working"
        })
    })
    await Promise.all(promises)
    await new Promise(resolve=>setTimeout(resolve,2000))
    // console.log("worked",proi);
   }
    }
    catch(err){
        console.log("something went Wrong",err.message);
    }
    
}
submitEmailInBatches(arr,5)

app.get("/",(req,res)=>{
    return res.send("Hello")
})

app.listen(port,()=>{
    console.log("Working");
})