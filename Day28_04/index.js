function foo() {
    if (false) {
        var a = 10;
    }
    console.log(a);
}
 
foo()
 
 

console.log(true + false - '1' + '2');
console.log(false || undefined || "hello"  || null);
 
console.log("hello");
for(var i=0; i<10; i++) {
    setTimeout((a)=>{
        console.log(a);
    },1000)
}

 

function a(){
    console.log(c);
    var c = 10
    let getname =(c)=>{
        console.log(this.c);
    }
    
    console.log(c);
    getname()
}
a();

const obj2 ={
     a :10,
     b:()=>{
        console.log(this.a);
     }
}
 let x =obj2.b
 x()
 
     11         
const c = obj.b;
console.log(c());
c();

const person ={
     
    fullname:()=>{
        console.log(this.name +" "+this.lname);
    }
}

const member={
    name:"Rupali",
    lname:"Pawar"
}
person.fullname.call(member)