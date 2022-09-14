// Asynchronous Functions

function myAsync(){
    // It makes a call into an external Data Base
    // It can give us errors
}

const myPromess = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    // if everything is fine
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})


myPromess
    .then(() => console.log("It executed correctly"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("I always execute"))
