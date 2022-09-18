// saving information

// localStorage.setItem("name", "Juan")
// localStorage.setItem("name", "Gorka")

// console.log(localStorage.getItem("name"))

// localStorage.setItem("person", JSON.stringify({
//     name: "Juan",
//     age: 23
// }))

// console.log(JSON.parse(localStorage.getItem("person")));

//JSON.stringify -> converts an object/array in a string
//JSON.parse -> converts an object/array already changed to string through stringify in a JS object.

// localStorage.removeItem("name")

// sessionStorage.setItem("name-session", "Gorka")


// Cookies

document.cookie = "namecookie = JuanCookie"

//set expires requiring cookies.
document.cookie = "nameExpires = name; expires = " + new Date(2022,10,20).toUTCString()

console.log(document.cookie);
