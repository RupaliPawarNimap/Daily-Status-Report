let nums = [1, 2, 3];
let doubled = [];

nums.forEach(num => {
  doubled.push(num * 2);  // You manually build new array
});

console.log(doubled); // [2, 4, 6]


let value =nums.map(val=>val*2);
console.log(value);


console.log(nums.forEach((val)=>


    console.log(val*2)
))
