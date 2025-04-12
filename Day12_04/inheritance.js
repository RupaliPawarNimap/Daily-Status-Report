// class Student{
//     constructor(name,age,marks){
//         this.name =name;
//         this.age=age;
//         this.marks=marks
//     }
//     detail(){
//         console.log(`My name is ${this.name}  and age  is ${this.age} ,I obtained the marks ${this.marks}`);
//     }
// }
// class Teacher{
//     constructor(name,age,sub){
//         this.name =name;
//         this.age=age;
//         this.marks=marks
//     }
//     detail(){
//         console.log(`My name is ${this.name}  and age  is ${this.age} ,I obtained the marks ${this.marks}`);
//     }
// }
// let s1 =new Student("Rupali",21,89)

const { log } = require("console");

// s1.detail()
class Person{
    constructor(name,age){
        console.log("This is parent class constructor");
        this.name =name ;
        this.age =age;
    }
    detail(){
         console.log(`My name is ${this.name}  and age  is ${this.age} ,I obtained the marks ${this.marks}`);


    }
}

class Student extends Person {
    constructor(name,age,marks){
        console.log("This is child constructor");
        super(name,age);
        this.marks =marks
         
    }
}
class Teacher extends Person{
    constructor(name,age,sub){
        super(name,age);
        this.sub =sub
    }
}
let stu =new Student("Rupali",21,"90")
stu.detail()
let teacher =new Teacher("Smita",56,"Marathi")
 console.log(teacher.name);
teacher.detail()



class Mammal{
    constructor(name){
        this.name =name ;
        this.type ="Cold-blooded"
    }
    eat(){
        console.log("I am Eating");
    }
}
class Dog extends Mammal{
    constructor(name){
        super(name)
    }
    bark(){
        console.log("I am Barking");
    }
}
class Cat extends Mammal{
    constructor(name){
        super(name)
    }
    Meow(){
        console.log("Meow...Meow");
    }
    eat(){
        console.log("I am cat and i am eating");//we can overide the parents methds
    }
}

let  cat =new Cat("Meeeow")
console.log(cat.name);
cat.Meow();
cat.eat()
