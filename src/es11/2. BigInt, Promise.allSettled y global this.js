// BigInt
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);
console.log(aBigNumber);
console.log(anotherBigNumber);

// Promise All Settled
const promise1 = new Promise((resolve,reject) => reject("reject"));
const promise2 = new Promise((resolve,reject) => resolve("resolve 1"));
const promise3 = new Promise((resolve,reject) => resolve("resolve 2"));
Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

// Global this
// console.log(window);
// console.log(self);
// console.log(frames);
// console.log(this);
console.log(window);
console.log(globalThis);