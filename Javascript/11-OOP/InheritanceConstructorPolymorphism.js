// Inhertiance
class Person {
    _name // _ -> Protected
    _age

    constructor(name, age) {
        this._name = name; //Only the this. because the other is the parameter
        this._age = age;
    }

    greet() {
        console.log(`Hi my name is ${this._name} and my age is ${this._age}`);
    }
}

class Developer extends Person {
    constructor(name, age, language){
        super(name,age)
        this._language = language
    }
    //Polymorphism - Poly is many, morphism is change. many changes.
    greet(){ //Override
        super.greet()
        console.log(`And I'm a Developer in ${this._language}`);
    }
}

const newDev = new Developer("Juan", 23, "JavaScript")
console.log(newDev);
newDev.greet()


