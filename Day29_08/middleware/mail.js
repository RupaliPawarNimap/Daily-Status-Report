const nodemailer =require("nodemailer")


const createTransport =nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:"rupali.pawar@nimapinfotech",
        pass:""
    }
})

let text =`Hello `
let subject="Status Updated"

const sendMailInBatch=async(rec,batchsize=1000)=>{
    for(let i=0;i<=rec.length;i+batchsize){
        let batch=rec.splice(i,i+=batchsize)
         let sendmail=batch.map((email)=>{
        createTransport.sendMail({
            to:email,
            from:"",
            text,
            subject
        })
    });
    try{
        await Promise.all(sendMailInBatch);
        console.log("Email Sent");
    } catch(err){
        console.log("failed To send");
    }
    await new Promise((res)=>setTimeout(()=>res(),2000))
    

    }
    

    
   
}