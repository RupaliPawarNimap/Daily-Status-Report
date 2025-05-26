function reverse(str){
    let newstr=""
    for(let i=str.length-1;i>=0;i--){
        newstr+=str[i]

    }
    return newstr
}
// console.log(reverse("hello"));

function maximum(arr){
    let max=arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max;
}

// console.log(maximum([1,2,3,4]));

// Input: "3 + 5 * 2 - 4 / 2"
// Output: 11

// console.log(3 + 5 * 2 - 4 / 2);

// function calculate(str){
//     // let data = parseInt(str)
//     // console.log(data);
//     let number=[]
//     let numarr=[]
//     let data=(str.split(""))
//     for(let i=0;i<data.length;i++){
//         if(data[i]==" "){
//             continue
//         }
//         else{
// number.push(data[i])

//         }
//     }
//     for(let i=0;i<number.length;i++){
//         let num =Number(number[i])
         
         
//         if(typeof(num)==Number && num!==NaN){
//              console.log(number[i]);

//         }
//         else{
//             continue
//         }
//     }
//     console.log(numarr);
// }
// calculate("3 + 5 * 2 - 4 / 2")

function calculate(str){
    return Math.floor(new Function(` return ${str}`)())
}
console.log( calculate("3 + 5 * 2 - 4 / 2")
);