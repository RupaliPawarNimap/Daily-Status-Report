// let input=false;
// if(typeof input !==Number){
//     console.log("not a number");
// }
// else if(input%3===0 && input%5===0){
//     console.log("FizzBuss");
// }
// else if(input%3===0){
//     console.log("Fizz");
// }
// else if(input%5===0){
//     console.log("Buzz");
// }
 
// else if(input%3!==0 &&input%5!==0){
//     console.log(input);
// }


// function FizzBuss(num){
//     if(typeof num!=="number")
//     {
//         return "Not a number"
//     }
//     if(num%3==0 && num%5==0){
//         return "FizzBuss"

//     }
//     if(num%3==0){
//         return "Fizz"
//     }
//     if(num%5==0){
//         return "Buzz"

//     }
//     else{
// return num
//     }
// }
// console.log(FizzBuss(false));




// // speed limit


// function checkSpeed(speed){
//     let speedLimit =70;
//     let kmLimit=5
//     if(speed<speedLimit+kmLimit){
//        console.log("K");
//     }
//     else{
//  let points =Math.floor((speed-speedLimit)/kmLimit)
//  console.log(points);
 

//  if(points>=12){

// console.log("Your Licenece Suspended");
//  }
//  else{
//     console.log("Points: ",points);
//  }

//     }

// }
// checkSpeed(130)

// function numberShow(num){
//     for(let i=0;i<=num;i++){
//         if(i%2==0){
//             console.log(i,"Even");
//         }
//         else{
//            console.log(i,"Odd");
//         }
//     }
// }
//  numberShow(10)


//  function checktruthy(arr){
//     let count =0
//     for(let i of arr){
//         if(i){
//             count++
//         }
//     }
//     return count

//  }
//  let count =checktruthy( [1,2,3,"",false])
//  console.log(count);


//  function Frequency(str){
//     let newarr =[]
//     // let splitstr =str.split("")
//      for(let i of str){
       
//         if(newarr[i]){
//             newarr[i]+=1
//         }
//         else{
//             newarr[i]=1
//         }
        
//      }
//     //  return newarr
//     for(let i=0;i<str.length;i++){
//        console.log(newarr[str[i]]);
        
//     }



    
//  }
//  Frequency("Rupaliiii");  


//  function nonRepeating(str){
//     let newarr =[]
    // for(let i of str){
    //     if(newarr[str[i]]==i){
    //       console.log(newarr[str[i]]);
          
        // }
        // else{
        //    newarr.push(i)
        // //    console.log(result);
        // }

//     }
//     return newarr
//  }
 
// console.log(nonRepeating("Rupaliii"));

function Frew(str){
    let newarr=[]
    for(let i of str){
        if(newarr[i]){
            newarr[i]+=1
        }
        else{
            newarr[i] =1
        }
    }
    for(let i=0;i<=str.length;i++ ){
        if(newarr[i]===1){
            console.log(newarr[i]);
        }
    }
    
}
 (Frew("Rupali"));

 