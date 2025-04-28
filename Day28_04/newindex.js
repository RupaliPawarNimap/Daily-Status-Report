// for(var i =0;i<10;i++){
//     setTimeout((a) => {
//         console.log(a);
//     }, 1000*i,i);
// }


// for(let i=0 ;i<10;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },2000*i)
// }

function revStr(str){
    let newstr =""
    for(let i=str.length-1;i>=0;i--){
newstr+=str[i]
    }
    console.log(newstr);
 
}
revStr("Rupali");


function countVowels(str){
    let vow ="aeiouAEIOU"
    const obj ={}
    let count =0;
    for(let i=0;i<str.length;i++){
        for(let j=0;j<vow.length;j++){
            if(str[i]==vow[j] ){
                if(obj.includes(str[i])){
                str[i] 
                    continue
                }
                else{
                    obj.push(str[i])
                }
            }
            
        }
        
      
}
console.log(obj,obj.length);
}

countVowels("Rupaliiii")

console.log(this.a);