const personalData = {
    nombre: "Juan",
    apellido: "Marulanda",
    edad: 24,
    altura_cm: 185,
    eresDesarrollador: true,
}

const edad1 = "edad"
console.log(personalData[edad1])

const userList = [
    {
        ...personalData
    },
    {
        nombre: "Kogi",
        apellido: "Hoyos",
        edad: 22,
        altura_cm: 175,
        eresDesarrollador: true,
    },
    {
        nombre: "Cristian",
        apellido: "Palacios",
        edad: 23,
        altura_cm: 180,
        eresDesarrollador: false,
    }
]
console.log(userList);

const orderedList = userList.sort((a,b) => b.edad - a.edad)
console.log(orderedList);