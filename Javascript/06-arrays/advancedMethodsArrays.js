// Advanced methods
//.map() .filter() .reduce()

//.map()

const array = ["San Sebastian", "Madrid", "Barcelona", "Alicante", "Bilbao"]

const val = array.forEach(v => {
    console.log(v);
})

console.log(val);

//it can be used short way because there is no calculation made inside the .map function.
const newArray = array.map((v,i) => `${i + 1} - ${v}`) 

console.log(newArray);


//.filter()

const objectList = [
    { name: "Juan", age: 23},
    { name: "Gorka", age: 45},
    { name: "Miguel", age: 28},
    { name: "Lucia", age: 3},
    { name: "Amaia", age: 39}
]

// const thirtyYearOld = objectList.filter(v => {
//     if (v.age > 30) {
//         return true
//     } else {
//         return false
//     }
// })

const thirtyYearOld = objectList.filter(v => v.age > 30)

console.log(thirtyYearOld);

const newList = objectList.filter(v => v.name !== "Miguel")
console.log(newList);

//.reduce()

const values = [3, 56, 23, 5, 90, 100]

const sum = values.reduce((accumulative, cur, i, arrayOriginal) => {
    console.log(accumulative);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return accumulative + cur
})

console.log(sum);