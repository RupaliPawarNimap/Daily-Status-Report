function click(){
    let count =0
    document.getElementById("click").addEventListener("click",function(){
        console.log("Button clicked",++count);
    })
}
click()       


//mostly we need t delet the event listener when they dont have the use 