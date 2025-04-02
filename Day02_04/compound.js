 
function addition(){
    let sum=0
    for(let i =0;i<=10;i++){
        sum+=i
    }
    console.log(sum);
}
addition()

 function power(num){
    let res =2

    return res**=num
}
// console.log(power(2));
console.log(power(3));


// finding reverse of nuber
 
function number(num){
    let res =0;
while(num>0){
    let digit =num%10;
     res =res*10+digit
    num =Math.trunc(num/10)
    
}
return res
   
}
console.log(number(213));