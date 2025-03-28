// console.log("Named function");


// function calculateArea(len,width){
//     return len*width
    
// }
// console.log(`The Area is :${calculateArea(12,4)}` );  


//  console.log("Arrow function");
// const square =function(n){
//     return n*n
// }
// console.log(square(5));


//  console.log("IIEF function");

// (function(){
//     console.log("Hello World");
// })()


//  console.log("Pure function");


// function add(a,b){
//     return a+b
// }

// console.log(add(5,7));


// //callback function
// function processnuber(num ,callback){
//     callback(num)
// }
// processnuber(2,(num)=>{console.log( num* num);

// }) 
  


// function name(name,callback){
//     // name ="Rupali"
//     return callback(name)
// }
// name("rup",(name)=>{
//     console.log("HEllo " +name)
// })


// // function callback(){
// //     for(var i =0;i<=5;i++){
// //         function print(i){
// //             setTimeout(() => {
// //                 console.log( i);
                
// //             }, i*1000);
// //         }
// //         print(i)
// //     }
  
  
// // }
// // callback()


// console.log("Higher order function");


// let arr =[2,3,4,5]
// function EvenNum(arr){
//     for(let i=0;i<=arr.length;i++){
//         return  arr.filter((i)=>{
//             if(arr[i]%2===0){
//                 console.log("Even");
//             }
//             else{ 
//                 console.log("ODd");

                
//             }

//         })
//     }
  
// }

//  EvenNum(arr)


// //  another way to do 
// function FilterEven(){
//     return arr.filter(num=>num%2===0)

// }console.log(FilterEven([12,5,6,7,3]));


 


// console.log("Recursion");
// function fact(n){
//    if (n===0) return 1
//   return n*fact(n-1)

// }
// console.log(fact(5));


// console.log("Generator function");
// function*counterup(){
//     for(let i=1;i<=5;i++){
//         yield i
//     }
// }

// const count =counterup()
// console.log(count.next().value);
// console.log(count.next().value);
// console.log(count.next().value);
// console.log(count.next().value);
// console.log(count.next().value);


// console.log("Anonmuys function");
// const number =[1,2,3,4,5]
// const double =number.map(num=>num*num)

// console.log(double);
// let arr2 =[]
 
// function doubleFun(number){
//     for(let i=0;i<arr.length;i++){
//          arr2.push(number[i]**2)
        
        
//     }
//     return arr2
// }
// let data =[3,4,5,6]
//  console.log(doubleFun(data));


// console.log( "cnstructor function ");  
// function Person(name,age){
// this.name =name;
// this.age =age
// }
// const person1  =new Person("Rupali",21  );
// console.log(person1.name);
// console.log(person1.age);



// // async await function 
// console.log("ASync await function");
// async function fetchdate() {
//     try{
//         let response =await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         let data =await response.json()
    
//         console.log(data);
       
//     }

// catch(error){
//      console.log("Unable to fetch the data");   
// }
// }
// fetchdate()

// console.log("Currying function");
// function add(a){    
//     return function(b){
//         return function(c){
//             return a+b+c
//         }

//     }
    
// }
// console.log(add(1)(2)(3));




function additionFun(n){
    if (n===0) return 1
    return(n*additionFun(n-1))  
}
console.log(additionFun(5));


//Fibonacci series 
    function Fibonacci(num){
        let result ;
        let a =0
        let b =1
        if(num ===0){
            return 0
        }
        if (num===1){
            return 1
        } 
        else{
    for(let n=2;n<=num;n++){
        result = a +b
        console.log("result is:" +result);
        a=b;
       console.log("value of a: ",a);
        b=result
        console.log("value of b: ",b);
    }
    
        }
        return b

    }
    console.log(Fibonacci(5));

