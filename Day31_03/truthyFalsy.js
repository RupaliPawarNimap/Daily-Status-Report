// falsy value =0,-0,nan,undefined,false,null,""


function checkTruthy(val){
if(val){
    console.log("Truthy value");
}
else{
    console.log("Falsy value");
}
}
checkTruthy("")
checkTruthy(" ")

console.log([]==false); //""==0 so it return the true
console.log({ }==false); //false
console.log(null===undefined);
console.log(null==undefined);
console.log([ ] =={});//false
console.log([] && {});//{}
console.log({} && []);//[]
console.log(null??"default" |"Fallback");
console.log(''?? "Default");