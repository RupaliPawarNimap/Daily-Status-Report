const {CriiptoVerifyRedirectPassportStrategy} =require("@criipto/verify-express");
 
const passport =require("passport");
require("dotenv").config();

passport.use("criiptoVerifyRedirect",new CriiptoVerifyRedirectPassportStrategy({
    domain:process.env.APP_CLIENT_DOMAIN,
    clientID:process.env.APP_CLIENT_ID,
    clientSecret:process.env.APP_CLIENT_SECRET,
    redirectUri:'http://localhost:3000/auth/mitid/callback',
    postLogoutRedirectUri:"http://localhost:3000/"

},
async(jwtClaims,done)=>{
   try{
    let user ={id:jwtClaims.sub,claims:jwtClaims}
    console.log(user);
    return done(null,user)

   }
   catch(err){
    return done(err,false)
   }
    
}
))

// passport.serializeUser((user,done)=>done(null,user));
// passport.deserializeUser((obj,done)=>done(null,obj))

module.exports={passport}