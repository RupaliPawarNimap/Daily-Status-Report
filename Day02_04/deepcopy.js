const obj={
    name:"Rupali",
    lname:"Pawar",
    add:{
        loc:"Solapur"
    }
}
const Another ={...obj}
console.log(obj);
console.log(Another);
Another.add.pin=591234;
console.log(obj);
console.log(Another);


//here it occurs the prblem it changes the original obj as well in the add obj


const origialarr =[1,2,3,[3,6]]
const shallowcopy =[...origialarr]
shallowcopy[3][2]="Rupali"
console.log(shallowcopy);
console.log(origialarr);
// like this it updated original arr as well so this is called shallow copy only copies the tp level nested it will
// not support 



//so we use deep copy that is performed with the help of json
const original =[1,2,3,{
    name:"Rupali",
    age:21
}]
const deepcopy =JSON.parse(JSON.stringify(original))
deepcopy[3].age =23
console.log(deepcopy);
console.log(original);


//this is how we acheive the deep cpy so nested arr and obj also not get affected