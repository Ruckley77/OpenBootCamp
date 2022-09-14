const nom = "Juan"

greet(nom);


function greet(name){
    console.log(`Hi ${name}`);
}

let name_2 = "Gorka"
console.log(name_2);

goodbye(name_2)
console.log(name_2);

function goodbye(name){
    name = "Diego"
    console.log(`Goodbye ${name}`);
}


let person = {
    name: "Alberto",
    lastname: "Gonzalez"
}

greetPerson(person)

console.log(person);

function greetPerson(objeto){
    objeto.lastname = "Villar" // It is changing the original object, BE CAREFUL !!! Try to use propagation [...]
    console.log(`Hi ${objeto.name} ${objeto.lastname}`);
}

greet()

////////

function printNumber(number = 7){ // Default Parameters
    console.log(number);
}

printNumber()

////////

function imprimir(...parameters) {
    console.log(parameters);
}

imprimir(1, 3, 9, 2, "Hola", { id: 9})

///////

function sum(...nums){
    return nums.reduce((a,b) => a + b)
}

const s = sum(1, 2, 3, 4, 9, 15, 16)

console.log(s);

//////

function multiply (a = 0, b = 0){
    return a * b
}

console.log(multiply(3,3));