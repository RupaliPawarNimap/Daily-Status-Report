function countPrime(start,end){
    function isprime(num){
        if(num<=1){
            return false
        }
        else{
            for(let i=2;i<=num/2;i++){
                if(num%i===0){
                    return false
                }
            }
            return true
        }
    }
let primes =[]
for(let j=start;j<=end;j++){
    if(isprime(j)){
        primes.push(j)
    }
    else{
        continue
    }
}
return primes
}
console.log(countPrime(10,20));