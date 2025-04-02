const arr =[["Rupali",21],
["Vishal",18]]
console.log(arr);
console.log(arr[0][0]);
console.log(arr[0][4]);
const tictac =[
    ["x",null,null],
    [null,null,"O"],
    [null,"X",null]
]
console.log(tictac[0][1]);
console.log(tictac[1]);
console.log(tictac[0]);
console.log(tictac[2]);

const arr2 =[1,22,3]
console.log(arr2.toString());


const fruits =["Apple","Banana","Chiku"]
const newfruit=[]
Object.assign(newfruit ,fruits)
console.log(newfruit);
newfruit.push("Mango")
console.log(newfruit);
console.log(fruits);
const obj ={
    name:"Rupali",
    lname:"Pawar"
}
const newobj ={}
Object.assign(newobj,obj)
console.log(newobj);
newobj.age =21;
console.log(obj);
console.log(newobj);


//with the help of assign proprties it is helpfull for creting the seprate memory for both the arrays other wise if we simply assign 
// use assign oprator then it is not not possibl coz it refer t same memeory adderess



// Another way is spread operator


// const sobj ={...obj} 
// console.log(sobj);
// copying  the arr and obj 
const sobj=[].concat(obj)
console.log(sobj);
 