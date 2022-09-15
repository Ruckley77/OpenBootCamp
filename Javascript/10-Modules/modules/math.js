function sum(a,b) {
    return a + b
}

function multi (a,b){
    return a * b
}

function expo(a,b){
    return a ** b
}

function factorial (a){
    let factorial = 1
    for(let i = 1; i <= a; i++){
    factorial *= i;
    }
    return factorial
}

module.exports = {
    sum,
    multi,
    expo,
    factorial
}