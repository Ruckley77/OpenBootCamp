let fact = 10;
let i = fact-1;

while (true) {
    if (i > 1) {
        fact = fact * (i);
        i--;
        console.log(fact);
    } else {
        break;
    }
}

console.log(fact);