function closure(){
    let count =0
    return{

         incre :()=>{
        count++
        return count

    },
     decre:()=>{
       count--
       return count
    },
    getCount :()=>{
        return count
    }
    }
   
     
}
let counter =closure();
counter.incre()
counter.incre()
counter.decre()
// console.log(counter.getCount());



function filter(arr){
    let newarr =[]
    for(let ele of arr){
        // console.log(ele);
        // if(!newarr.includes(ele)){
        //    newarr.push(ele)
        // }
        if(newarr.length==0){
            // console.log(ele);
            newarr.push(ele)
            console.log(newarr);
        }
        else{

            for(let key of newarr){
                if(key!==ele){
                    console.log("before",newarr)
                    newarr.push(key)
                    console.log("after",newarr);
                }
                else{
                    continue
                }

        }
        }
         


    }
    return newarr
}
console.log(filter([1, 2, 2, 3, 4, 4, 5]));
 
 
 