function curry(x){
    return function (y){
        console.log(x*y)
    }
   
}

let curr1 =curry(3)
curr1(4)
 