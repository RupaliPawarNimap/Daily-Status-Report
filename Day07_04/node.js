// const data=require("./module.js" )
const {x,sum}=require("./module.js")
 
// console.log(global);
// console.log(this);//this will return empty object
// console.log(globalThis);
console.log(globalThis===global); //true
// console.log(data.sum(4,2));
// console.log(data.x);

console.log(sum(2,5));
console.log(x);
 