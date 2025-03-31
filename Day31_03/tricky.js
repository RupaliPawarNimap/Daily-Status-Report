setTimeout(() => console.log(2), 0);
console.log(3);

 
function foo() {
    if (false) {
        var a = 10;
    }
    console.log(a);
}
foo();

 
console.log('start');
setTimeout(() => {
    console.log('setTimeout');
}, 0);
setImmediate(() => {
    console.log('setImmediate');
});
process.nextTick(() => {
    console.log('process.nextTick');
});
Promise.resolve().then(() => {
    console.log('Promise');
});
queueMicrotask(() => {
    console.log('queueMicrotask');
});