const emiite =require("events");
const emiiter=new emiite()
emiiter.on("msgLogge",()=>
{
    console.log("mesg lgged");
})
emiiter.emit("logged");
