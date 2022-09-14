function greet() {
    hi()
}

function hi() {
    console.log("Hi");
}


greet()

// 1. global()
// 2. greet() global()
// 3. hi() greet() global()
// 4. greet() global()
// 5. global()


// function recursive(){
//     recursive() Maximum call stack size exceeded !! because it is calling itself infinite times.
// }

// recursive()