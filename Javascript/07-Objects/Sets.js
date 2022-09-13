const array = [1, 2, 3, 4, 5, 6, 2, 3, {id: 5}, {id: 5}]
const mySet = new Set(array)
// const family = new Set(["Juan", "Daniel"])

// set allows to remove data with the same value.
// objects even tho they have the same attributes, they are not the same object.
console.log(array);
console.log(mySet);

mySet.add(9)
console.log(mySet);

mySet.add(4)
console.log(mySet);

mySet.delete(6)
console.log(mySet);

// mySet.clear()
// console.log(mySet);


console.log(mySet.has(4));
console.log(mySet.size);

mySet.forEach(v => {
    console.log(v);
})

const it_mySet = mySet.values()
console.log(it_mySet);

const ar_mySet = [...mySet]
console.log(ar_mySet);