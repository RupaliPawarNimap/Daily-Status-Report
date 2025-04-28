let add =0
function sum(...arg){
   for(let i=0;i<arg.length;i++){
    add+=arg[i]
   }
   return add
}
 
console.log(sum(1,2,3,4));
let arr= [1,2,3]
let arr2 = arr
arr2.push(5)
console.log(arr);
console.log(arr2);
let a =10
let b=a;
b=12
console.log(b);
console.log(a);