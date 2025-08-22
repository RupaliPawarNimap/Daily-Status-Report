const passport =require("passport");
const {CriiptoVerifyRedirectPassportStrategy} =require("@criipto/verify-express");
const {User} =require("../models/user")
require("dotenv").config();


passport.use("criipto",new CriiptoVerifyRedirectPassportStrategy({
    domain:process.env.DOMAIN,
    clientID:process.env.CLIENTID,
    clientSecret:process.env.CLIENTSECREAT,
    redirectUri:"http://localhost:3000/auth/mitid/callback",
    acrValues: "urn:grn:authn:dk:mitid:primary"
},
async(jwtClaims,done)=>{
    try{
        console.log(jwtClaims);
let [users] =await User.findOrCreate({where:{
    mitID:jwtClaims.sub},
    defaults:{
        name:jwtClaims.name|| null,
        email:jwtClaims.email||null
    }
})
return done(null,users)
    }
    catch(err){
        return done(err,false)

    }
}))

module.exports ={passport}