// let arr=[1,2,3,4,5]
// let prime =[]
// for (let key = 0; key < arr.length; key++) {

const { pid } = require("process");

//     let num=arr[key]
//     function primeFun(num){
//         let flag=0
//         for(let i=2;i<num;i++){
//             if(num%i===0){
//                 flag=1;
//                  break

//             }
//             else{
//                 prime.push(i)
                 
//                continue
//             }
//         }
//         // if(flag==0){
            
//         // }
//         // else{
//         //     return false
//         // }
//         return prime
//     } 

//    console.log(  primeFun(num)); 
     
// // }
 
function prime(num){
     
    let flag=0;
    for(let i=2;i<num;i++){

        if (num<2){

            break

        }
        if(num%i===0){
           return false
        }
        
        
    }
    
     
    
    return true
}

let arr =[1,2,3,4]
let primearr =[]
for(let i=0;i<arr.length;i++){
    if(prime(arr[i])){
        primearr.push(arr[i])
    }

    
}
console.log(primearr);