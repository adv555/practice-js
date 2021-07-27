'use strict';

console.log('Test log');
const now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getTime());
console.log(now.setHours(18));
console.log(now);

let start = new Date();

// for (let i = 0; i < 1000; i++) {
//   let some = i ** 3;
//   //   console.log(some);
// }
// let end = new Date();

// console.log(start);
// console.log(end);

// alert(`Цикл отработал за ${end - start} миллисекунд`);
