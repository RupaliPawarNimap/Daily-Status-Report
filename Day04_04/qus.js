// function pattern(n){
//     let res =""
//     for(let i=0;i<n.length;i++){
//        res =res+n[i]
//        console.log(res);
//     }
    
// }
// pattern("ABCDE")

let math =require("mathjs")
 

function noPattern(n){
    let res ="";
    for(let i=1;i<=n;i++){
        res ="*".repeat(i)
        console.log(res);
    }

}
noPattern(4)

function pyramid(n){
    for(let i=1;i<n;i++){
        let space=" ".repeat(n-i);//according to no it reduces the space
        let star="*".repeat(2*i-1);//calculting the odd n so
        console.log(space+star);

    }
   
    
    
}
pyramid(5)
reversePyramid(5)
// console.log("             ");
function reversePyramid(n){
    for(let i=n;i>=1;i--){
        let space=" ".repeat(n-i);//according to no it reduces the space
        let star="*".repeat(2*i-1);//calculting the odd n so
        console.log(space+star);
       
    }
}
// reversePyramid(5)


function prime(n){
    let arr =[]
    for(i=2;i<=n;i++){
        if(math.isPrime(i)){
            arr.push(i)

        }
    }
    return arr
}
console.log(prime(1000));