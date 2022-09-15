const person = {
    name: "Juan",
    age: 23,
    isDeveloper: true,
    greet: function(){
        console.log("hi");
    }
}

const other_person = {
    name: "Meli",
    age: "22",
    isDeveloper: false,
    greet: function(){
        console.log("Hola");
    }
}

console.log(person);

person.greet();
other_person.greet();

const createPerson = (name, age, isDeveloper) => {
    return {
        name, //name: name,
        age,
        isDeveloper,
        greet: function() {
            console.log("Hello");
        }
    }
}

const person1 = createPerson("Oe", 4, true)
console.log(person1);