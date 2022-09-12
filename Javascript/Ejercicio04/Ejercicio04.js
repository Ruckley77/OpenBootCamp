let nombre = "Juan";
let apellido = "Marulanda";

let estudiante = `${nombre} ${apellido}`;
console.log(estudiante)
let estudianteMayus = estudiante.toLocaleUpperCase();
console.log(estudianteMayus)
let estudianteMinus = estudiante.toLocaleLowerCase();
console.log(estudianteMinus)
let numeroCaracteres = estudiante.length;
console.log(numeroCaracteres)
let primeraLetraNombre = nombre.charAt(0);
console.log(primeraLetraNombre)

let sinEspacios = estudiante.trim();
console.log(sinEspacios);

let contiene = estudiante.includes(`${nombre}`);
console.log(contiene)

