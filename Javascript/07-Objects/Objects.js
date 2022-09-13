const obj = {
    id: 4,
    name: "Juan",
    lastname: "Marulanda",
    isDeveloper: true,
    favorite_book: ["El metodo", "El codigo de la manifestacion"],
    "4-games": [1, 2, 3, 4]
}

console.log(obj["4-games"]);

const prop = "isDeveloper";
console.log(obj[prop]);

const obj2 = obj;
console.log(obj2);

// when you redefine the attribute for the obj2 when obj2 = obj, it changes in memory slot the value of obj.

obj2.name = "Gorka";
console.log(obj2.name);
console.log(obj.name);

// This is a completely new object, so it will be a new memory slot.
const obj3 = {...obj}

obj3.name = "Chris"

console.log(obj.name);
console.log(obj3.name);

// Ordering lists of objects with one property

const movieList = [
    {
        title: "Lo que el viento se llevo",
        year: 1939
    },
    {
        title: "Titanic",
        year: 1997
    },
    {
        title: "Moana",
        year: 2016
    },
    {
        title: "El efecto mariposa",
        year: 2004
    },
    {
        title: "TED",
        year: 2012
    }
]

console.log(movieList);

//.sort() --> Mutates the value of the original list.

movieList.sort((a,b)=> a.year - b.year)

console.log(movieList);