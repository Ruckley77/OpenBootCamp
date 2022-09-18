const f = document.getElementById("form")
console.log(f)

f.addEventListener("submit", event => {
    console.log(event)
    event.preventDefault()
})