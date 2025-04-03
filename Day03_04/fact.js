// function factorial(n){
//     let res =1
//     if(n==0){
//         return false
//     }
//     for(let i=1;i<=n;i++){
// res*=i

//     }
//     return res
// }
// console.log(factorial(5));


// function recuFact(n){
    
//     if(n===0){
//         return 1
//     }
    
// return  n*recuFact(n-1)
   
      
  
  
// }
//  recuFact(5)
//  console.log(recuFact(5));

//  const str ="Rupaliiiii"
//  console.log(str.replace("R","D"));
//  console.log(str.charAt(2));
//  console.log(str.padStart(16,"*"));
//  console.log(str.split(""));

//  let dupli =str.split("");
 
//  function duplicate(dupli){
//     let newarr =[];
//     for(let key of dupli){
//         if(!newarr.includes(key)){
// newarr.push(key)
//         }
//     }
//     return newarr.join("")

//  }
//  console.log(duplicate(dupli));

// function LngestStr(str){
//     let splitstr =str.split(" ");
//     let maxstr=""
//     for(let key of splitstr){
//         if(key.length>maxstr.length){
//             maxstr =key
//         }
//         else{
//             continue
//         }
//     }
//     return maxstr
    
// }
// console.log(LngestStr("Hello000000 Rupaliiii her"));


//  function vowel(str){
//     let newstr ="";let vow ="aeiouAEIOU"
//     for(let i=0;i<str.length;i++){
//         for(let j=0 ;j<vow.length;j++){
//             if(str[i]===vow[j]){
//                 newstr+=str[i]
//             }
//         }
//     }
//     console.log(newstr);
//  }
//  vowel("Rupali")


function fibonacci(num){
    let sum=0
    if(num===0){
        return 0
    }
    else if(num===1)
    {
        return 1
    }
    else{
        let n1=0;
    
        let n2 =1
        for(let i=2;i<=num;i++){
            sum=n1+n2;
            n1 =n2;
            n2=sum

        }
    }
    return sum
}
 console.log(fibonacci(5));



 function gretest(a,b){
    let temp ;
    for(let i=1;i<=Math.min(a,b);i++){
        if(a%i==0&&b%i==0){
            temp=i
        }
    }
    console.log(temp);
 }
 gretest(25,50)


 function gcd(a, b) {
    while (b !== 0) {
      let remainder = a % b;
      a = b;
      b = remainder;
    }
    return a;
  }
  
  console.log(gcd(18,48)); // Output: 6
  