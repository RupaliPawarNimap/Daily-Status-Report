function hcf(num1,num2){
    h=0
    for(let i=0;i<=num1 && i<=num2;i++){
if(num1%i==0 && num2%i==0){
    h=i
}
    }
    return h
}
console.log(hcf(4,2));
console.log(hcf(10,5));



function lcm(num1,num2){
    let l =num1>num2?num1 :num2;
    
    while(true){
        if( l%num1==0&& l%num2==0){
           
            break;
        }
        l++ 
    
    }
    return l
}
console.log(lcm(2,3));
console.log(lcm(4,3));


function addition(num1,num2){
    return num1+num2
}
console.log(addition(1,2));


function squareRoot(num1){
    return Math.sqrt(num1)
}
console.log(squareRoot(4));
console.log(squareRoot(16));

 function swap(num1,num2){
    // let temp=num1;
    // num1 =num2;
    // num2=temp
    // return [num1,num2]
    num1 =num1+num2;
    num2 =num1-num2;
    num1 =num1-num2
    return [num1,num2]
 }
 console.log(swap(1,2));

 function random(){
   return Math.floor(Math.random()*10)
 }
 console.log(random());

 function check(num){
    if(num>0){
        console.log(`${num} is +ve`);
    }
    else if(num<0){
        console.log(`${num} is -ve`);
    }
    else  {
        console.log(`${num} it Zero`);
    }
     
 }
 check(1)
 check(0)
 check(-1)

 function EvenOdd(num){
    if(num%2==0){
        console.log(`${num} is even`);
    }
    else{
        console.log(`${num} is odd`);
    }
 }

 EvenOdd(12);

 function largest(num1,num2,num3){
if(num1>num2 && num1>num3){
    console.log(`${num1} is largest`);
}
else if(num2>num1 && num2>num3){
    console.log(`${num2} is lARGEST`);
}
     else{
        console.log(`${num3} is Largest`);
     }
 }
 largest(1,2,3)
 largest(3,2,4)
 largest(95,2,2)

  function prime(num){
    let isPrime =true
    if(num===1 || num<1){
        return "Num is not prime"
    }
    else{
        for(let i =2 ;i<=num/2;i++){
            if(num%i===0){
                 isPrime =false
                 break
            }
        }
        if(isPrime){
            console.log(`${num} is prime`);
        }
        else{
            console.log(`${num} is not prime`);
        }
    }
  }
  prime(2)
  prime(4)
  prime(3)
  prime(48)
  prime(94)

//   function factorial(num){
//     let fact =1
//     for(let i=1;i<=num;i++){
//         fact*=i
//     }
//     console.log(fact);
//   }
//   factorial(5)

function factorial(num){
    if(num===1){
        return 1
    }
    else{
 return num*factorial(num-1)
    }
     
}
console.log(factorial(5));
console.log(factorial(3));

 

function multiplication(num){
    for(let i=1;i<=10;i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
}
multiplication(5)
multiplication(10)


function isprime(num){
    if(num==1 || num<1){
        return false
    }
    for(let i=2;i<=num/2;i++){
if(num%i===0){
    return false
}
    }
    return true
}

function  checkPrime(num=1000){
    let newarr =[]
    for(let i=1;i<=num;i++){
        if(isprime(i)){
             newarr.push(i)
        }
        
    }
    console.log(newarr);

}
checkPrime()


function fibonacci(limit){
let num1 =0
let num2 =1
let num3 =[]
for(let i=0;i<limit;i++){
    console.log(num3.push(num1));
     let next =num1+num2;
     num1 =num2;
     num2=next
}
return num3

}
console.log(fibonacci(5));


function armstrong(num){
    let original =num
    let str =String(num)
    let len =str.length
    let add=0
  while(num>0){
        let digit =num%10;
        // console.log(digit);
         add+=digit**len
        //  console.log(add);
        
        num =Math.floor(num/10)

  }
  if(original==add){
    console.log(`${original} is Armastrong`);
  }
  else{
    console.log(`${original} is not Armastrong`);
  }
 

}
armstrong(121)
armstrong(153)


function firstNNumber(num){
    let sum =0
    for(let i=1;i<=num;i++){
sum+=i
    }
    console.log(sum);
}
firstNNumber(10)

function hcfno(num1,num2){
    let hcf =0
    for(let i=0;i<=num1 && i<=num2;i++){
        if(num1%i===0 && num2%i===0){
hcf =i
        }
    }
    console.log(hcf);
}
hcfno(5,10)
function LcmNo(num1,num2){
    let lcm =num1>num2?num1:num2;
    while(true){
        if(lcm%num1 ===0 && lcm%num2==0){
            break;
        }
        lcm++
    }
    console.log(lcm);
}
LcmNo(2,4)
LcmNo(4,5)