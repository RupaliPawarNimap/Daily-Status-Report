let str ="My nameeeee is Rupali";
// let maxstr=""
//  let spiltstr=str.split(" ")
//  for (const x in spiltstr) {
//     let val =spiltstr[x]
//     if(val.length>maxstr.length){
//         maxstr=val

//     }
     
   
//  }
//  console.log(maxstr)
 
let splitstr =str.split(" ")
let maxstr =""
for(let x of splitstr){
    if(x.length>maxstr.length){
        maxstr =x
    }
}
console.log(maxstr);

//   function vowel(str){
//     let vow ="aeiouAEIOU"
    
//     for(let x of str){
//         for(let y of vow){
//            if(x==y){
// console.log(x);


//            }
//         }
//     }
   
//   }
//   vowel("Rupali")