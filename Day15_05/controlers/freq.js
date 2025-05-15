function frequency(str){
    let arr ={};
    for(let i of str){
        if(arr[i]){
            arr[i]+=1
        }
        else{
            arr[i]=1
        }
    }
    return arr
}
console.log(frequency("Rupali"));


function summation(arr){
 let newarr =[]
    for(let i=0;i<arr.length-1;i++){
         
        for(let j=1;j<arr.length;j++){

            if(arr[i]+arr[j]==0  ){
                newarr.push(arr[i],arr[j]);
                break;
            }
        }
    }
    console.log(newarr);
}

summation([1,-2,3,2,-1])
 