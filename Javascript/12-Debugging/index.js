const person = {
    name: "Gorka",
    age: 34
}
console.log(person);

function getDoubleAge(age){
    return 2 * age
}

const doubleage = getDoubleAge(person.age)
console.log(doubleage);


function getArray(age){
    let arrayNums = []
    for (let i = 0; i < 10; i++) {
        const number = age + i
        console.log(number);
        arrayNums = [...arrayNums, number]
    }
    return arrayNums
}

const array = getArray(person.age);
console.log(array);