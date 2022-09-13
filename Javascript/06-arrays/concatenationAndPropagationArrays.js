const array1 = ["Hi", 2 , false, null]
const array2 = ["Bye", 8, true, undefined]
const array3 = array1.concat(array2)

console.log(array3);

console.log(...array3);

// Propagation
const array4 = [...array1, ...array2]
console.log(array4);

//Be careful, its not the same using ... than not adding them. below its a list with 2 lists.
const array5 = [array1, array2];
console.log(array5);