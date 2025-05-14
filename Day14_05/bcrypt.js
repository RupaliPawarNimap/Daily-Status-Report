// const bcrypt =require("bcrypt");
 
// bcrypt.hash("Rupali",10,(err,hash)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(hash);
//     }
// })

// let hash1 ="$2b$10$LlJjtUqf6noDFjfy2XvNcuQbSw/HUiAGVTux35BTrpHrUT5eo0Hfm"
// let hash2 ="$2b$10$8.NlJbLhB4yHHRnaasaOtuPKy9cm.vviDm5R5tQUTp2xC2q21SxoW"
// if(hash1==hash2){
//     console.log("True");
// }
// else{
//     console.log("false");


// }

// bcrypt.compare("Rupali","$2b$10$8.NlJbLhB4yHHRnaasaOtuPKy9cm.vviDm5R5tQUTp2xC2q21SxoW",(err,res)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     if(res){
//         console.log("Password is Correct");
//     }else{
//         console.log("Passsword is incorrect");
//     }
// })
// const json =require("jsonwebtoken")
// json.sign({foo:"fooo"},"Hello",(err,token)=>{
//     console.log(token);
// })
// try{    
//     json.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJmb29vIiwiaWF0IjoxNzQ3MTk4OTI1fQ.ohIpg2yxYDTA6dB5KJ8HQTc5PhkU3BG93jk26xajXWg","Hello",(err,res)=>{
//         console.group(res)
//     });
    
// }
// catch(err){
//         console.log("err is:",err);
//     }
//     const json =require("jsonwebtoken")
// const decode =json.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJmb29vIiwiaWF0IjoxNzQ3MTk4OTI1fQ.ohIpg2yxYDTA6dB5KJ8HQTc5PhkU3BG93jk26xajXWg")
// if(decode){
//     console.log(decode);
// }
// else{
//     console.log("err occured")
// }

const bcrypt =require("bcrypt");
const json=require("jsonwebtoken")
let psd ="Rupali@123"
let secret ="secretKey"
async function authentcate(){
let hash =await bcrypt.hash(psd,10);
let comapre =await bcrypt.compare(psd,hash);
// console.log(comapre);
 if(comapre){
    let token  =await json.sign({name:"Rupali",email:"abc@123"},"secretkey",{expiresIn:1})
    setTimeout(() => {
        try{
     let res= json.verify(token,"secretkey")
    console.log("Client Authenticated",res);
        }
        catch(err){
            console.log("Client is Not Authenticated",err.message);
        }
     
    }, 3000);
    // console.log(token);
   
 }
 else{  
    console.log("Cleint is not authenticated");
 }
}
 
authentcate()
 
 