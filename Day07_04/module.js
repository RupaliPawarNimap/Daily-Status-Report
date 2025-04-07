console.log("this is module")

let a ="Hello node.js"
function sum(a,b){
    return a+b
}
z =12 //this is possible in commn js module
// module.exports =sum;
// we pass the onj as wel 
// module.exports ={
//     x:a,
//     sum:sum,
// };
module.exports ={
    a,sum
}

