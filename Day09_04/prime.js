function CountPrime(start,end){
    let arr=[]
    for(let i=start;i<end;i++){
        if(prime(i)){
arr.push(i)
        }
        else{
            continue
        }
    }
    return arr



function prime(num){
    let flag=0
       for(let i=2;i<num;i++){
        if(num%i===0){
            flag=1
            // break;
            return false
        }
       

       }
       return true  
    //    if(flag===1){
    //     console.log("number is prime");
    //    }
    //    else{
    //     console.log("number is not prime");
    //    }
      
}
}
// prime(12)
// prime(7)

console.log(CountPrime(1,50));