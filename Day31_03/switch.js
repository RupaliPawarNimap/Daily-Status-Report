let date =new Date()
let day =date.getDay();
console.log(day);
switch (day){
    case 0:{
        console.log("Its monday");
        break;
    }
    case 1:{
        console.log("Its Tuesday");
        break;
    }
    case 2:{
        console.log("Its wendsenday");
        break;
    }
    case 3:{
        console.log("Its thursday");
        break;
    }
    case 4:{
        console.log("Its friday");
        break;
    }
    case 5:{
        console.log("Its Sat");
        break;
    }
    default:{
        console.log("Sunday 😉");
    }
}

console.log(Boolean(``));


// const detail =  {
//     fname:"Rupali",
//     arr
    
// }
// const arr =[detail
 
// ]
// console.log(arr);
 const arr =[1,2,3]
const detail =  {
    fname:"Rupali",
    arr
    
}
console.log(detail.arr[0]);