// let name ="Rupali"

// function print(){
//     log()
// }

// function log(){
//     const name ="Vishal";
//      console.log(name)
    
// }

// print();
// log();


// function outer(){
//     let count=1;
//     function inner(){
//         return count
//         count++
//         return count
//     }
//     return inner()
// }

// console.log(outer())

// function outer(){
//     let count =1;
    
//     return {
//         increment :()=>count++,
//         decrement :()=>count--,
//         get:()=>count
//     }
// }
// let data =outer();
// data.increment();
// data.increment();

//  console.log(data.get())

// function print(){
//     let name ="Rupali"
//     return function inner(){
//         console.log(name)
//     }
    
// }
// print()()

// function clo(){
//     for(var i=0;i<3;i++){
//         setTimeout(()=>{
//             console.log(i)
//         },1000*i)
//     }
// }
// clo()


// function once(fn){
//     let called =false
//     return function(...args){
//         if(!called){
//             called =true
//             return once(...args)
//         }
//     }
// }

//  console.log(once([1,2,3]))
//   console.log(once([1,2,3]))

// function createCounter(){
//     let count =0;
//     return {
//         increment :()=>count++,
//         decrement:()=>count--,
//         get:()=>count
//     }
// }
// let newcount=createCounter()
// newcount.increment();
// newcount.increment()
// console.log(newcount.get());

// function sum( arg=[...args]){
//     let s =arg.length;
//     let a=0
//     for(let i=0;i<s;i++){
//         a+=arg[i];
//     }
//     console.log(a);
// }
// sum([1,2,3,3])

function sum(arg =[...args]){
    let s =arg.length;
    let a =0
    return function(y){
 
         for(let i=0;i<s;i++){
            a+=arg[i]
         }
         a+=y
         console.log(a);
    }
     

}
sum([1,2,3])(3)