const button = document.querySelector(".btn")

button.addEventListener("click", () => {
    // confirm("Do you agree?") && console.log("Ok")
    confirm("Do you agree?")
        ? console.log("Ok")
        : console.log("No");
})


const btnInfo = document.querySelector(".btn-info")

btnInfo.addEventListener("click", () => {
    const name = prompt("What is your name?")
        console.log(`Your name is ${name}`)
})

const list = [
    {
        name: "Juan",
        age: 23
    },
    {
        name: "Gorka",
        age: 34
    },
    {
        name: "Luis",
        age: 56
    }
]

// console.log(list);
console.table(list) //clt