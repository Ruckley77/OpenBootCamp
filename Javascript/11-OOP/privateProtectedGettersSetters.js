class Person {
    // Private -> #
    // only access inside the class
    #name
    #age

    // Protected -> _
    // only access inside the class and child classes.
    _isDeveloper = true

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    greet() {
        console.log(`Hi my name is ${this.name} and my age is ${this.age}`);
    }
    getName(){  // Allows to obtain (in a controlled way) any protected attribute
        return this.#name;
    }
    // #obtainAge(){
    //     return this.#age
    // }
    getAge(){
        return this.#age
    }
    setAge(newAge){
        this.#age = newAge
    }
}

const person1 = new Person("Gorka", 23)
// console.log(person1);
// console.log(person1.age);
person1.greet()

console.log(person1.getName());

const age = person1.getAge()
console.log(age);

person1.setAge(15)
console.log(person1.getAge());

// console.log(person1._isDeveloper);

// Setter -- Method that allows changing the value of on the private or protected values.
// Getter -- Method that allows obtaining the private or protected atributes/methods.