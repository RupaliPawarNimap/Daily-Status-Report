"use strict"
console.log(this);//{}
function a (){
    console.log(this);
}
a()//undefined in strict mode else window obj


const obj={
    a:"name",
    b :function(){
console.log(this);
    }
}
obj.b()///points to the obj iteself


const student ={
   name:"Rupali",
    x:function(){
        console.log(this.name);
    }
}
student.x()
//  console.log(student.name);

//  console.log(student.x());\

 
 
const obj2 ={
    name:"vishal"
}
student.x.call(obj2)


let ar =()=>{
    console.log(this);
}
ar()