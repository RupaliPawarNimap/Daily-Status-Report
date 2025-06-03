//  function prime(num){
//     if(num<=1) return false
//     if(num==2) return true
//     for(let i=2;i<=Math.sqrt(num);i++){
//         if(num%i===0){
//             return false
//         }
        
//     } 
//      return true
//  }

 
//  function range(start,end){
//  let newarr =[];
//  for(let i=start;i<=end;i++){
//     if(prime(i)){
//         newarr.push(i)
//     }
//  }
//  return newarr
        
 
//  }

//  console.log(range(1,100));

function sum(num){
    let rev =0
    let sum =0
    while(num>0){
        let digit =num%10;
       sum+=digit
       
        num =Math.trunc(num/10)
    }
    console.log(sum);
}
sum(1234)