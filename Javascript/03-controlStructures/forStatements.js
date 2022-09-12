for (let i = 0; i < 10; i++) {
    console.log(i)
}


let list = [1, 4, 6, 2, 3, 7, 10, 12];


for (let i = 0; i < list.length; i++) {
    console.log(list[i])
}

for (let value of list) {
    console.log(value)
}

list.forEach(value => {
    console.log(value)
});

let person = {
    name: "Juan",
    lastname: "Marulanda",
    age: 23,
    isDeveloper: true
}

let prop = "age";
console.log(person[prop]);

for (let property in person) {
    console.log(property)
    console.log(person[property])
}