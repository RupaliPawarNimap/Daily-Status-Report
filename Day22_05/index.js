// console.log('end');
// async function bar() {
//   return await 42;
// }

// bar().then(console.log);
// console.log('A');

// setTimeout(() => {
//   console.log('B');
// }, 0);

// (async () => {
//   console.log('C');
//   await null;
//   console.log('D');
// })();

// console.log('E');
// async function doubleAwait() {
//   return await await 10;
// }

// doubleAwait().then(console.log);

 
(async () => {
  console.log(1);

  await Promise.resolve().then(() => {
    console.log(2);
  });

  console.log(3);
})();

setTimeout(() => console.log(4), 0);

Promise.resolve().then(() => {
  console.log(5);
});

console.log(6);
 