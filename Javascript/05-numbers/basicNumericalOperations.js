let a = 3.5;
let b = 4.8;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);


let aS = a.toString();
console.log(typeof aS);

let c = 3.3;
let d = c * 3;
let e = 1839.12324
let f = 22135561

console.log(d);
// Limits number of decimals, also its a string
console.log(d.toFixed(5));
console.log(typeof d.toFixed(5));
console.log(e.toFixed(8));
console.log(f.toFixed(2));

// Number of significative units, also an string
console.log(e.toPrecision(5));
console.log(f.toPrecision(5));
console.log(typeof f.toPrecision(5));