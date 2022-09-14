function func() {
    return true
}
console.log(func());

function delay(){
    return myPromess
}

// const myPromess = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(console.log("Hola soy una promesa"))
//     }, 5000)
// })

// delay();


function* generatePair(){
    let n = 0;
    while(true){
        n++;
        n = 2*n;
        if (n === 10){
            return n 
        }
        yield n
    }
}

const genPair = generatePair();

console.log(genPair.next());
console.log(genPair.next());
console.log(genPair.next());
console.log(genPair.next());
console.log(genPair.next());
console.log(genPair.next());
console.log(genPair.next());
console.log(genPair.next());
console.log(genPair.next());
console.log(genPair.next());