let arr1 =[1,2,3,4,88888];
let arr2 =[2,1,5,6,88888]
// let arr3 =[...arr1,...arr2];
let newarr =[]
// // console.log(arr3);
// for(let ele of arr3){
//     if(newarr.includes(ele)){
//         continue
 
//     }
//     else{newarr.push(ele)}
    
// }
// console.log(newarr);

 

//  function intersection(arr1,arr2){
//     for(let key in arr1){
     
//         //  console.log(arr1[key]);
//          for(let ele in arr2){
//             // console.log(arr2[ele]);
//             if(arr1[key]===arr2[ele]){
//                 newarr.push(arr1[key])
//             }
//          }
//     }
//     console.log(newarr);
//  }
//  intersection(arr1,arr2)


// Sum of th even number 
function SumEvenArr(arr1){
    let sum=0
    arr1.filter((ele)=>{
        if(ele%2===0){
            sum+=ele
        }
    })
  console.log(sum);
}
SumEvenArr(arr1)


function sum(arr2){
    let sum=0
    for(let key of arr2){
        if(key%2===0){
            sum+=key
        }
    }
    console.log(sum);
}
sum(arr1)




// missing number in the arr for 1 to n sum 
function missingNo(arr1){
    let n=arr1.length+1
    let totalSum =(n*(n+1))/2;
    let sum =0
    for(let i=0;i<arr1.length;i++){
        sum+=arr1[i]

    }
    return totalSum-sum

}
console.log("Missing no is : "+missingNo([1,2,4,5,6]));


// . Reverse Words in a String
let newar =[]
function Reverse(str){
    let spiltst =str.split(" ");
    // console.log(spiltst);
    for(let i =spiltst.length-1;i>=0 ;i--)
    {
newar.push(spiltst[i])
// console.log(spiltst[i]);


    }
   console.log(newar);
   
}
Reverse("Hello World JavaScript")
console.log("grt out");
