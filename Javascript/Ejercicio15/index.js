const nombre = "Juan"
const apellido = "Marulanda"

const persona = {
    nombre,
    apellido
}

// sessionStorage.setItem("persona", JSON.stringify(persona))
// localStorage.setItem("persona", JSON.stringify(persona))

const expireDate = new Date()

expireDate.setTime(expireDate.getTime() + (120 * 1000))

// document.cookie = `persona = ${JSON.stringify(persona)}; expires = ${expireDate}`