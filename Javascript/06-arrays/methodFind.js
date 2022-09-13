// Iterations in an array


// Old way not efficient
const array = ["Hi", 2, 5, 90, false, undefined]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    
}

// ES6 more efficient

let sum = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19] 

arrayNums.forEach(value => {
    sum += value;
    console.log(value);
})

console.log(sum);


// search a value inside an array

const variable = array.find(value => {
    if (value === 90) {
        return true
    }
})

console.log(variable);

const objectList = [
    { name: "Juan", age: 23},
    { name: "Gorka", age: 45},
    { name: "Miguel", age: 28},
    { name: "Lucia", age: 3},
    { name: "Amaia", age: 29}
]

const object = objectList.find(o => o.name === "Juan")

console.log(object.age);

const { age } = objectList.find(o => o.name === "Lucia")

console.log(age);