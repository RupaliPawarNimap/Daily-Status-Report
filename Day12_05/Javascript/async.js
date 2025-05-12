// const p =new Promise((res,rej)=>{
//     // console.log("PRomise Reosolved");
//  return res(1)
// }).then((res)=>{
//     console.log( "res is",res);
// }).catch((err)=>{
//     console.log("err is :",err);
// })

// const p1 =new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Promise Resolved");
//     }, 10000);
// })
// const p2 =new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Promise Resolved");
//     }, 20000);
// })

// async function greet(){

//     return p
// }
// const dataPromise =greet()
// dataPromise.then((res)=>{
//     console.log(res);
// })

// async function handlePromise(){
//      console.log("Hello");
//     const val =await p1
//      console.log("Namste js");
//     console.log(val);
//     const val2 =await p2
//      console.log("Namste js2");
//     console.log(val2);
     
// }
//handlePromise()//.then(res=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log("err is:",err);
// })

// function normal(){
//     p.then((res)=>{
//         console.log("Res is",res);
//     }).catch((err)=>{
//         console.log("err is",err);
//     })
//     console.log("Hello");
// }
// normal()

API_URL ="https://api.github.com2/"
async function fetchData(){
    let data =await fetch(API_URL);
    let jsonData =await data;
    console.log(jsonData);

}

fetchData().then((res)=>{
    console.log("res");
}).catch((err)=>{
    console.log("err:",err);
})

    function outest(){
        var a =10
        function outer(b){
            function inner(){
    return [a, b,c];
            }
            var c=20
            return inner
        }
        return outer
    }
    console.log(outest()("Hello")())

    // function counter(){
    //     var count =0
    //     return function increment(){

    //         count++
    //         console.log(count);
    //     }
    // }
    // let count1 =counter()
    // count1();
    // count1();

    function counter(){
        var count =0
        this.incrementCounter =function(){
            count++
            console.log(count);
        }
        this.decrementCounter=function(){
            count--
            console.log(count);
        }
    }
    let counter1 =new counter();
    counter1.incrementCounter()
    function a(){//function statement
        console.log(a)
    }
    a()

var b =function(){
    console.log("Hello");//function express
}
b()

var c =function d(){//named function
    // console.log("Heeloo Word");
    d()
}
c()
//this is annonymous fun()
    // function (){

    // }

var a =function b(){
    return function xyz(){

    }
}
console.log(a());

function first(b){
    console.log( b)
}
function arg(){
    return("Argument as Passed");
}
first(arg())