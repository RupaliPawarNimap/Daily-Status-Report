// // setTimeout(() => {
    
// // }, timeout);
// setTimeout("console.log('Hello Rupali ') ;console.log('smeone send u msg')",1000)//u have to right the emiocoln otherwise it will give u error
// setTimeout(`
//      console.log("HEllo Rupali")
//     console.log("This is anothe function");
//     `
    
// , 1000);//u can use backtics for        

// setTimeout("console.log('hello-1')",2000);
// setTimeout("console.log('hello-2')",3000);
// setTimeout("console.log('hello-3')",1000)


 
 
 
 
console.log("Hello");
setTimeout(function(){
    console.log("This is setTimeout function")
},2000)
console.log("after setimeout");
setTimeout(a,2000);
function a(){
    console.log("This is annoymous fun")
}
console.log("Done")

function hello(){
    console.log("Heloo")
}
setInterval(time,2000)
let date =document.getElementById("date");
function time(){
    let time =new Date();
    date.innerHTML=time.toLocaleTimeString()
}

function fun(){
    let result =""
    for(let i=0;i<10;i++){
       result="Hello"+i
    }
    document.getElementById("head").innerHTML=result
}

setInterval(fun,1000)


function greet(msg,delay){
    setTimeout(() => {
        console.log(msg);
        
    }, delay);

     
}
greet("Hello Rupali",2000);
greet("This is second msg",1000)

 
 