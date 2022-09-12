// .valueOf() - Obtain the value from literals.
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);

console.log(b.valueOf());

let n = Number("bye");
console.log(n);

let numero = "5.765";
let numero2 = 16.4;

console.log(numero + numero2); // Error, it shouldnt be added this way, one is a string the other is a number

console.log(Number(numero) + numero2);

// parse = extract and change it to Int/Float, and if its a string its changed to number.
console.log(parseInt(numero));
console.log(parseFloat(numero));
console.log(typeof parseFloat(numero));

let numHex = "0x3a5b7"; //base 16 starts with 0x as notation
console.log(parseInt(numHex));

let minPresicion = Number.EPSILON;
let minValueJs = Number.MIN_VALUE;
let maxValueJs = Number.MAX_VALUE;

console.log(minPresicion);
console.log(minValueJs);
console.log(maxValueJs);
