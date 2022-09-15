// module is a part of the code that could be used in different parts
// ways of importing modeules
// 1. CommonJS - require
// 2. Import ES6 - import

// const moduleMath = require('./modules/math') --- this is a way of doing it.

const { factorial, sum } = require("./modules/math.js")

const fact = factorial(5)
console.log(fact);

const add = sum(12,90)
console.log(add);