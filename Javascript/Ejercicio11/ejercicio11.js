class Estudiante {
    nombre = "Juan"
    asignaturas = ["Javascript", " Html", " CSS"]

    obtenDatos(){
        return (`El estudiante es ${this.nombre} y esta en la asignaturas ${this.asignaturas}`)
    }
}


const Estudiante1 = new Estudiante()
console.log(Estudiante1.obtenDatos())