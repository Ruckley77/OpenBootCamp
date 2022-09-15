export function sum(a,b) {
    return a + b
}

export function multi (a,b){
    return a * b
}

export function expo(a,b){
    return a ** b
}

export function factorial (a){
    let factorial = 1
    for(let i = 1; i <= a; i++){
    factorial *= i;
    }
    return factorial
}


const getAuthor = () => {
    return "Marulito"
}

export default getAuthor //only one export default per file