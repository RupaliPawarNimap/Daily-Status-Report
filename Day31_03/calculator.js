let id =document.querySelector("#demo")
let num1 =parseInt(prompt("Enter first number"))
let num2 =parseInt(prompt("Enter the second number"))
let oper =prompt("Enter the operations (+,-,*,/)")
let result;
if(oper ==="+"){
    result =num1+num2

}
else if(oper ==="-"){
    result =num1-num2

}
else if(oper ==="*"){
    result =num1*num2

}
else if(oper ==="/"){
    result =num1/num2

}
else{
    result ="you have passed wrong input"
}
// alert("The result is: "+result)
 
 id.innerHTML ="Output is : " +result



 