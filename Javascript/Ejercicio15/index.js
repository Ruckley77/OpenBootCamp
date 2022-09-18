const nombre = "Juan"
const apellido = "Marulanda"

const persona = {
    nombre,
    apellido
}

sessionStorage.setItem("Nombre", JSON.stringify(persona))
localStorage.setItem("Nombre", JSON.stringify(persona))

document.cookie = ("CookieJuan", JSON.stringify(persona))


const fecha = new Date()
document.cookie = "nameExpires = name; expires = " + fecha.setTime(fecha.getTime() + (120*1000))
