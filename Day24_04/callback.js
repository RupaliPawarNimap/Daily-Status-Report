
let stocks ={
    fruits:["banana","Kiwi",'stwbery'],
    liquid:["water","Icee"],
    holder:["cone","cup"],
    topping :["Chocklet","penuts"]
}
let order =(furit_name,call_prod)=>{
 
 setTimeout(()=>{
    console.log(`${stocks.fruits[furit_name]} is selected`);
    call_prod()
 },2000)
     

}
let prod =()=>{
    setTimeout(()=>{
        console.log("Order received,Productin is started");
        setTimeout(()=>{
            console.log("Fruits are chooped")

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added`);
                setTimeout(() => {
                    console.log("Mchine is stared");
                    setTimeout(()=>{
                        console.log(`${stocks.holder[0]} is holded`);
                        setTimeout(() => {
                            console.log(`${stocks.topping[1]} is added on Ice cream`);
                           setTimeout(() => {
                            console.log(`Served Ice-Cream`);
                           },2000); 
                        }, 2000);
                    },1000)
                }, 1000);
            }, 1000);
        },1000)
      
     },0)
}
order(0,prod)


  let shop_open =true
  function order(time,work){
    return new Promise((resolve,reject)=>{
        if(shop_open){
            setTimeout(()=>{
                resolve(work())
            },time)
        }
        else{
            reject("Shop is Closed")
        }
       
    })
  }    
  order(2000,()=>{
    console.log(`${stocks.fruits[0]} is selected`);
  }).then(()=>{
    return order(1000,()=>{
        console.log(`Production is started`);
    })

  }).then(() => {
    return order(2000,()=>{
        console.log(`Fruits are chooped`);
    })
  }).then(() => {
    return order(2000,()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added`);
    })
  }).then(() => {
    return order(1000,()=>{
        console.log("start the Machine");
    })
  }).then(() => {
    return order(3000,()=>{
        console.log(`Ice cream placed in ${stocks.holder[0]}`);
    })
  }).then(() => {
    return order(3000,()=>{
        console.log(`${stocks.topping[1]} is added`);
    })
  }).then(() => {
    return order(1000,()=>{
        console.log("Ice Cream is served");
    })
  }).catch((err)=>{
    console.log("Err",err);
  }) .finally(()=>{
    console.log("Day ended shop is closed");
  })