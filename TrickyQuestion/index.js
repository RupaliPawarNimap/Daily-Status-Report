console.log(Boolean(" "));      //true
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN));      // false
console.log(Boolean("0"));      // true
console.log(Boolean(0));        // false
console.log(Boolean(false));    // false
console.log(Boolean("false"));  // true

console.log([] == false);        //true
console.log(![] == false);       //true
console.log(null == undefined);  // true
console.log(0 == "0");           //true
console.log("0" == false);       // true
console.log([] == ![]);          // true
console.log("" == 0);            // true

if ("false") {                   // executed
  console.log("Executed");
} else {
  console.log("Not Executed");
}

if ([]) {                        // truthy
  console.log("Truthy");
} else {
  console.log("Falsy");
}

console.log(null == 0);          // false


console.log([1] == 1);             // true 
console.log([1,2] == "1,2");       // true
console.log([] + []);              // ""
console.log([] + {});              // [object object]
console.log({} + []);              // object bject
console.log([null] == 0);          // false
console.log([undefined] == 0);     // false
console.log(parseInt("08"));       // 08
console.log(!!"0" == !!"");        // true
console.log(false == []);          // true


// Q1
console.log(typeof null);//object

// Q2
console.log([] == false); //true
console.log(![] == false); //true

// Q3
function a() {
  return {
    test: "hello"
  }
}
function b() {
  return 
  {
    test: "hello"
  }
}
console.log(a()); //hello
console.log(b());//undefined

// Q4
let obj = { a: 1 };
let obj2 = obj;
obj2.a = 5;
console.log(obj.a);//5

// Q5
console.log(1 < 2 < 3);//true
console.log(3 > 2 > 1);//false


 console.log(a);//undefined
var a = 10;

console.log(b);//refresreeceerror
let b = 20;

sayHello();  //hello
function sayHello() {
  console.log("Hello");
}

sayHi();//sayhi not fun
var sayHi = function() {
  console.log("Hi");
};


var x = 1;
function foo() {
  console.log(x);//undefined
  var x = 2;
  function bar() {
    console.log(x);//2
  }
  bar();
}
foo();


function a() {
  console.log("a");
  b();
  console.log("a finished");
}
function b() {
  console.log("b");
  c();
  console.log("b finished");
}
function c() {
  console.log("c");
}
a();
// order
// c() 1st
// b() 2nd
// a()  3rd

var a = 10;
function test() {
  console.log(a);//undefined
  if (true) {
    var a = 20;
  }
  console.log(a);//20
}
test();

greet();  //error

var greet = function() {
  console.log("Hello World");
};

let x = 5;
function demo() {
  console.log(x); //error
  let x = 10;
}
demo();
// if we add var x =10 then work fine 
function test() {
  console.log(a);//undefined
  {
    var a = 20;
    let b = 30;
    console.log(b);//30
  }
  console.log(a);//20
  console.log(b);//error
}
test();


function say() {
  console.log("First");
}
function say() {
  console.log("Second");
}
say();//first

function one() {
  console.log("one start");
  two();
  console.log("one end");
}
function two() {
  console.log("two start");
  three();
  console.log("two end");
}
function three() {
  console.log("three start");
}
one();
// // op
// one start
// two start
// three start
// two end
// one end


let x = 5;
function demo() {
  console.log(x); //error
 var x =10
}
 

var x = 1;
function foo(y = x) {
  var x = 2;
  console.log(y);//
}
foo();

let a = 5;
(function() {
  console.log(a);//before initilization errror 
  let a = 10;
})();



const person = {
  name: "Rupali",
  greet: function (msg) {
    console.log(`${msg}, ${this.name}`);
  }
};
const other = { name: "Pawar" };
person.greet.call(other, "Hello");//Hello Pawar
person.greet("Hi");//Hi Rupali


function sayHello() {
  console.log(`Hello, ${this.name}`);
}
const user1 = { name: "Rupali" };
const user2 = { name: "Pawar" };
sayHello.call(user1);//Hello Rupali
sayHello.apply(user2);//Hello Pawar


const person = {
  name: "Rupali",
  sayHi: function () {
    console.log(`Hi, ${this.name}`);
  }
};
const greet = person.sayHi;
greet(); // undefined
const boundGreet = person.sayHi.bind(person);
boundGreet(); // Hi Rupali


const numbers = [5, 2, 9, 1];
const max = Math.max.apply(null, numbers);
console.log(max); // 9
const min = Math.min.call(null, ...numbers);
console.log(min); // 1 


function multiply(a, b) {
  return a * b;
}
const double = multiply.bind(null, 2);
console.log(double(5));  // 10
console.log(double(10)); // 20


var length = 10;
function fn() {
  console.log(this.length);
}
var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};
obj.method(fn, 1);//5


var name = "Global";
var obj = {
  name: "Rupali",
  getName: function() {
    return this.name;
  }
};
var test = obj.getName;
console.log(obj.getName());//Rupali
console.log(test());//Global



var a = 100;
function foo() {
  console.log(a);//undifined
  var a = 200;
  console.log(a);//200
}
foo();


function sayHi() {
  console.log("Hi", this.name);
}
var user = { name: "Pawar" };
var bound = sayHi.bind(user);
sayHi();//Hi undefined
bound();//Hi Pawar

const person = {
  name: "Rupali",
  greet: function() {
    console.log("Hello", this.name);
    setTimeout(function() {
      console.log("Hi", this.name);
    }, 0);
  }
};
person.greet();//Rupali 
//Hi undefined



var length = 4;
function callback() {
  console.log(this.length);//4
}
const obj = {
  length: 2,
  method: function(fn) {
    fn();                // 1
    arguments[0]();      // 4
  }
};
obj.method(callback, 1, 2, 3);



var name = "Global";
function showName() {
  console.log(this.name);
}
const person = {
  name: "Rupali",
  showName: showName,
  inner: {
    name: "Pawar",
    showName: showName
  }
};
person.showName();         // rupali
person.inner.showName();   // pawar
const test = person.inner.showName;
test();   //undefined
// 


var x = 1;
var obj = {
  x: 100,
  foo: function() {
    console.log(this.x);//100
    setTimeout(function() {
      console.log(this.x);//1
    }, 0);
  }
};
obj.foo();


var x=1;
(function(){
  console.log(x);//undefined
  var x=2;
  console.log(x);//2
})();


let a=10;
(function(a){
  console.log(a);//10
  a=20;
  console.log(a);//20
})(a);
console.log(a);//10


var length=4;
function f(){console.log(this.length);}
const obj={length:2, m:function(fn){fn(); arguments[0]();}};
obj.m(f,1,2);//3


const o={n:1, inc(){this.n++}};
const inc=o.inc;
 console.log(o.inc())
inc();
console.log(o.n);//2


const user={name:"Rupali", hi(){return this.name}};
const hi=user.hi.bind({name:"Pawar"});
console.log(user.hi(), hi());
//Rupali Pawar

const obj={name:"A", say:()=>console.log(this.name)};
obj.say();//undefined


function Foo(){this.x=42; return {x:7};}
console.log(new Foo().x);

console.log(typeof null, typeof NaN, Number.isNaN(NaN));//object number true

