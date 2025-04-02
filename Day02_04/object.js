// constructor function 


function Constructor(first,last,eyecolor,nationality){
    this.first=first;
    this.last=last;
    this.eyecolor=eyecolor;
    this.nationality=nationality

}

Constructor.prototype.age=21
const Person =new Constructor("Rupali","Pawar","Beown","Indian")
// Person.age =21  this is ok but we need to add n original and inherit so use prototype

console.log(Person);
console.log(Person.age); //it inherit properties from paren constuctor with the help of prototype


const obj={
    name:"Rupali",
    lname:"Pwar"
}
const obj2 ={
    role:"Developer",
    company:"Nimap",
    name:"Vishal"
}
console.log(Object.assign(obj,obj2));
console.log(Object.entries(obj));
for(let [key ,val] of Object.entries(obj)){
    console.log(key+":"+val);
}

const nwmap =new Map(Object.entries(obj))
console.log(nwmap);



const list =[
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
]
console.log(Object.fromEntries(list)); //convert it into obj 
// console.log(Object.values(list));
console.log(Object.values(obj));//prints the values


const fruits =[
    {name:"apples", quantity:300},
    {name:"bananas", quantity:500},
    {name:"oranges", quantity:200},
    {name:"kiwi", quantity:150}
]

function mycallback({quantity}){
    return quantity>200?"Ok":"Less"
}
const result =Object.groupBy(fruits,mycallback)
 console.log(result);

// for(let [key ,val] of result.ok.entries()){
//     console.log(key+":"+val);
// }
console.log(Object.keys(obj));
console.log(Object.getPrototypeOf(obj));


const newObj ={
    year:2025,
    month:"April"
}

// Object.seal(newObj) //whic is not allow to add the new key val
newObj.name ="Rupali"
console.log(newObj);

Object.freeze(newObj)
newObj.nationality="Ind"
console.log(newObj);
console.log(Object.isFrozen(newObj));
console.log(Object.isSealed(newObj));
// Methods of object 


const object ={
    place:"Solapur",
    clg:"AGPIT",
    RN:21,
    name:"Rupali"
}
const s={
state:"MAharashta"
}           
console.log(Object.assign(object,s))
console.log(Object.create(object));
const data = object.constructor;
console.log(data)

const my =Object.create(object)
my.name ="Rupali"
console.log(my)
my.age=21
console.log(my)

const datastr =Object.toString(object)
console.log(datastr)