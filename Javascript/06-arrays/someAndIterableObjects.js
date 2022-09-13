
const array = [1, 2, 3, 4, 5, -2, -3]

const res = array.some(value => value < 0);

console.log(res);

const exists = array.some(value => value === 10)

console.log(exists);

const objectList = [
    { name: "Juan", age: 23},
    { name: "Gorka", age: 45},
    { name: "Miguel", age: 28},
    { name: "Lucia", age: 3},
    { name: "Amaia", age: 39}
]

const verifyUser = objectList.some(value => value.name === "Lucia")
console.log(verifyUser);

// Obtain a list from Iterable objects

const str = "Hi Im Gorka"
console.log(str[3]);

const ar_st = Array.from(str);
console.log(ar_st);


const set = new Set ([2, 3, "hola", 4])
const ar_set = Array.from(set)
console.log(ar_set);


const keys = array.keys()
console.log(keys);

const ar_keys = Array.from(keys)
console.log(ar_keys);
