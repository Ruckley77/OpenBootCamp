
const array = [2, 5, 9, 15, 1, 17, 0, 4]


// sort() modifies the array

array.sort((a,b) =>{
    console.log(a);
    console.log(b);
    if (a < b){
        return -1
    } else if (a > b) {
        return 1
    } else { // a === b
        return 0
    }
})


console.log(array);


// Sort only numeric arrays

const numericArray = [4, 1, 7, 3, 1, 56, 1, 546]

const numericArraySorted = array.sort((a, b) => b-a)
console.log(numericArraySorted);

// Sorting Objects
const objectList = [
    { name: "Juan", age: 23},
    { name: "Gorka", age: 45},
    { name: "Miguel", age: 28},
    { name: "Lucia", age: 3},
    { name: "Amaia", age: 39}
]

objectList.sort((a,b) => {
    if (a.age < b.age){
        return -1
    } else if (a.age > b.age){
        return 1
    } else {
        return 0
    }
})

// objectList.sort((a,b) => a.age - b.age)

console.log(objectList)