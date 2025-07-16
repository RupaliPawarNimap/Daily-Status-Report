const express =require("express");
const app =express();
const {dbConnect} =require("./config/db")

app.use(express.json())

const port =3000

dbConnect();
app.get("/",(req,res)=>{
    res.json("Working")
})
app.listen(port,()=>{
    console.log("Listening");
})














































// // function person(name){
// //     this.name =name
// // }

// // person.prototype.greet=function (){
// //     return `Hello ${this.name}`
// // }



// //  person2 =new person("Rupali");
 

// //   console.log(person2.greet());
// //  console.log(person2.hasOwnProperty('greet'));
// //  console.log(person.hasOwnProperty("greet"));
// //  console.log(Object.hasOwnProperty("greet"));

// //  console.log(Object.getPrototypeOf(person2));
// //  console.log(Object.getPrototypeOf(person));
// // //  console.log(person.getPrototypeOf());
// // console.log(person2.__proto__);

// // const obj2 ={a:"Hey"}
// // Object.setPrototypeOf(obj2,{a:"Say"})

// // console.log(obj2)


// // function a(name){
// //     this.name =name
// // }

// // a.prototype.greet =function(){
// //     return this.name
// // }

// // const b =new a("Rupali");
// //  console.log(b.greet());



// const obj1 ={
//     name:"Rupali",
//     surname:"PAwar"
// }
// const obj2 ={
//     name:"Simran"
// }

// obj2.__proto__ =obj1;

// console.log(obj2.__proto__);
// console.log(obj2.name);
