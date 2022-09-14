function func() {
    return true
}
console.log(func());

async function delay(){
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

function* generatePair(){
    let n = 0;
    while(true){
        yield n += 2;
    }
}
