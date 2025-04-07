setTimeout(function(){
    console.log("This is calback function");
},1000)
  


function x (y){
    console.log("X function called");
    y()//otherwise it woudnt apper on screen

}
x(function y(){
    console.log("Y function called");
}
)
console.log("start");
 setTimeout(function (){

    console.log("Callback function");
 },2000)
 console.log("End");
 
