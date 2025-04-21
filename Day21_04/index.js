// // console.log(a);
// console.log(c);
// var c =134
// let  a =12
// let b =20;
// console.log(a);
// console.log(b);
// function fun(){
//     for(var i=1;i<=5;i++){
//         function inner(i){
//             setTimeout(() => {
//                 console.log(i);
//             }, i* 1000);
//         }
       
//         inner(i)
//     }
 
// }
// fun();

function fun(){
    for(let i=0;i<=5;i++){

        setTimeout(() => {
            console.log(i);
        }, i*1000);
    }
}
// fun();

function outer(){
    let count =0
    function inner(){
         
        count++;
        console.log(count);

    }
    return inner
}
let increment =outer();
increment();
increment()

let count =0
function counter(){
    count++
    return count;
}
console.log(counter());
console.log(counter());