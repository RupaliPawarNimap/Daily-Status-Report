// let name =prompt("Enter the name")||"Prcoder";
// let age =parseInt(prompt(("Enter the Age"))) || 21;
// if(name==="" || isNaN(age)){
//     console.log("Load the page and Enter the details");

// }
// else if(age<18){
//     console.log(`name is ${name} and age is ${age} is student`);
// }
// else if(age>=18 && age<50){
//     console.log(`name is ${name} and age is ${age} is working person`);
// }
// else{
//     console.log(`name is ${name} and age is ${age} is Retired`);

// }
// console.log(` Name: ${name}`);
// console.log(` Age: ${age}`);

// if(age<0){
//     console.log("Enter the valid age");
// }
// else if(age>0 && age<=4){
// console.log(`${name} is kid`);
// }
// else if(age>4 && age<=17){
//     console.log(`${name} is student `);
//     console.log("Doing computer science");
// }
// else if(age>=18 && age<=25){
//     console.log(`${name} is clg student`);
// }
// else if(age>=26 && age<=50){
//     console.log(`${name} is Working student`);
    
// }
// else if(age>=51 && age<=121 ){
//     console.log(`${name} Retired`);
// }
// else if (age>121){
//     console.log(`${name} is immotal`);

// }
// else{
//     console.log("Ente the valid details");
// }

// console.log("Program Completed");
// age =0.0

// if(age){
//     console.log(age);
// }
// else{
//     console.log("Invalid");
// }
// console.log(0.0==0);

// const readline = require("readline");

// // Create an interface for input/output
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });



// // Ask for user input
// rl.question("Enter your name: ", function(name) {
//     console.log(`Hello, ${name}!`);
//     rl.close();  // Close input stream
// });



    let a =parseInt(prompt("Enter the first side of Triangle"));
    let b =parseInt(prompt("Enter the second side of Triangle"));
    let c =parseInt(prompt("Enter the third side of Triangle"));
    let result =document.getElementById("id")
    if(a===b && b===c){
        result.innerText = "Equilateral Triangle";
    }
    else if(a===b || a===c || b===c){
        result.innerText = "Isosceles Traingle";
    }
    else{
        result.innerText = " Normal Triangle";
    }

