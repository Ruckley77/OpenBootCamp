let var1 = { id: false }
let array = [ 1, "hola", false, { id : 5 }, null, undefined, var1]

console.log(array);

console.log(array[1]);

// Methods to insert new values in arrays

array.push("end", 45, 100, false) // pushing values at the end
console.log(array);

array.unshift("Start", 0, true);
console.log(array);


const array2 = [1 , 2, "hola", false]
// Methods to delete values in arrays

array2.pop()
console.log(array2); // deletes at the end

array2.shift()
console.log(array2); // deletes at the start

// Method to delete, modify, or add value in our array
const array3 = [1, 2, 3, 4, 5, 6]

array3.splice(2, 1); // Delete with splice = (Index start, number of values after index)
console.log(array3);

array3.splice(2, 0, "hola", 3); //Add with splice = (Index start, 0, value that you want to add, value2)  0 so it doesnt delete any value
console.log(array3);

array3.splice(2, 1, 2.5); // Modify with splice = (Index start, 1, value that you want to add) 1 so it's only that value to delete and then add
console.log(array3);

