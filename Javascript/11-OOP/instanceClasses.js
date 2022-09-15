class Person {
    constructor(name, age, isDeveloper) {
        this.name = name;
        this.age = age;
        this.isDeveloper = isDeveloper;
    }

    greet() {
        console.log(`Hi my name is ${this.name} and my age is ${this.age}`);
    }
}

const newPerson = new Person("Gorka", 34, true)
console.log(newPerson);

newPerson.greet()

let number = 60 // Initiate
let person2 = new Person("Maria", 31, false) // Instance
console.log(person2 instanceof Person);

// instanceof -> similar to typeof but for clases