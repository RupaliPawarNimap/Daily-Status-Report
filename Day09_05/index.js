let p1 =Promise.resolve(1);
let p2 =Promise.reject(2);
let p3 =Promise.resolve(3);
try{
    let res =await Promise.all([])
    console.log(res);
}
catch(err){
   
    console.log(err);
}
 
let p4 =Promise.reject(1);
setTimeout(()=>{
    console.log("Hello");
},0)
p4.then(()=>{
    console.log("Resolved");
})
console.log("End");
Promise.any([
    Promise.reject('A'),
    Promise.reject('B'),
    Promise.resolve("C")
  ]).then(console.log)
    .catch(err => console.log(err.errors));
  

// 1. Order of execution
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');

// 2. Mixing async/await with setTimeout
async function test1() {
  console.log("1");
  await new Promise(res => setTimeout(res, 0));
  console.log("2");
}
test1();
console.log("3");

// 3. Promise constructor vs .then
new Promise((resolve) => {
  console.log("Inside Promise");
  resolve();
}).then(() => console.log("Then block"));
console.log("Outside");

// 4. What runs first?
setTimeout(() => console.log("timeout"), 0);
queueMicrotask(() => console.log("microtask"));
Promise.resolve().then(() => console.log("promise"));

// 5. Promise inside setTimeout
setTimeout(() => {
  console.log("timeout1");
  Promise.resolve().then(() => console.log("promise in timeout"));
});
console.log("sync");

// 6. Nested then chains
Promise.resolve()
  .then(() => {
    console.log("First");
    return Promise.resolve();
  })
  .then(() => console.log("Second"));
console.log("Outside");

// 7. async/await with no await
async function noAwait() {
  console.log("Start");
}
noAwait();
console.log("End");

// 8. setTimeout with 0ms vs Promise
setTimeout(() => console.log("timeout"), 0);
Promise.resolve().then(() => console.log("promise"));

// 9. async function returning a value
async function asyncValue() {
  return 42;
}
asyncValue().then(console.log);
console.log("After");

// 10. await in loop
async function loopAwait() {
  for (let i = 0; i < 3; i++) {
    await Promise.resolve();
    console.log(i);
  }
}
loopAwait();
console.log("Loop started");

// 11. await vs then
Promise.resolve().then(() => console.log("then1"));
(async () => {
  await null;
  console.log("await1");
})();
console.log("sync");

// 12. Delayed resolution
let resolveFn;
const p = new Promise((res) => {
  resolveFn = res;
});
p.then(() => console.log("resolved"));
console.log("before resolve");
resolveFn();
console.log("after resolve");

// 13. Multiple resolves
const p5 = new Promise((res, rej) => {
  res("first");
  res("second");
});
p5.then(console.log);

// 14. Chained async returns
Promise.resolve()
  .then(() => {
    console.log("A");
    return Promise.resolve("B");
  })
  .then(console.log);
console.log("C");

// 15. Error handling in async
async function foo() {
  try {
    await Promise.resolve("Oops");
  } catch (e) {
    console.log("Caught", e);
  }
}
foo();
console.log("End");
