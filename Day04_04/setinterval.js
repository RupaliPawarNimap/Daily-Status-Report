


// let i=0;
// function hello(){
   
//     document.getElementById("head").innerHTML ="Hello"+i

//     i++;
//     if(i>9){
//          document.getElementById("btn").innerHTML=clearInterval(timer)+"Completed"
//     }

// }
// let timer =setInterval(hello,1000);

// function stop(){
//      document.getElementById("btn").innerHTML=clearInterval(timer)+"Completed"
// }

function getdate(){
    let date=new Date()
    document.getElementById("head").innerHTML=date.toLocaleTimeString()
}
let time =  setInterval(getdate,1000)
console.log(time);


