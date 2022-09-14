// Arrow and anonymous functions

const array = [1, 5, 6, 2, 7, 12, 8, 92]

const array2 = array.map((value) => value * 2) // Anonymous function.
console.log(array2);

// console.log(doubleValue(6)); // Be careful, can't access arrow functions before they initialize.
const doubleValue = value => value * 2 // define arrow function to a const, then, define a const with the arrowfunction as parameter.
const array3 = array.map(doubleValue)
console.log(array3);

console.log(double(6));



function double(value){
    return value * 2
}