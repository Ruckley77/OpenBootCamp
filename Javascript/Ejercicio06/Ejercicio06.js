const listaCompra = ["Leche", "Arepas", "Huevos", "Queso", "Arroz"]

listaCompra.push("Aceite de Girasol")

console.log(listaCompra);

listaCompra.pop();

console.log(listaCompra);


const peliculas = [
    {title: "LOTR", director: "Juan", date: new Date(2003, 10, 31)},
    {title: "Harry Potter", director: "Kogi", date: new Date(2005, 8, 23)},
    {title: "Butterfly Effect", director: "Erick", date: new Date(2010, 12, 02)}
]

const postDate = peliculas.filter(v => v.date > new Date(2010, 1, 01))
console.log(postDate);

const directorList = peliculas.map(v => v.director)
console.log(directorList);

const titleList = peliculas.map(v => v.title)
console.log(titleList);

const titleDirectorList = titleList.concat(directorList)
console.log(titleDirectorList);

const titleDirectorListPropagation = [...titleList, ...directorList]
console.log(titleDirectorListPropagation);