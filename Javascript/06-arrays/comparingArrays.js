// comparing arrays

const array = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40]

// const result = array.every(v => {
//     if (typeof v === "number") {
//         return true
//     } else {
//         return false
//     }
// })

const result = array.every(v => v > 0)

console.log(result);


const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]

console.log(ar1 === ar2);


const compareArrays = (array_1, array_2) => {
    if (array_1.length !== array_2.length) {
        return false
    }
    const res = array_1.every((v,i) => {
        if (v === array_2[i]) return true
        return false
    })
    return res;
}

console.log(compareArrays(ar1,ar2));

const ar3 = [1, 2, 3, 3]

console.log(compareArrays(ar1,ar3));