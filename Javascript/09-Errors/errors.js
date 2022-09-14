const myfunction = val => {
    if (typeof val === "number"){
    return 2 * val
    }
    //return false
    throw new Error("Value must be a number")
}

// const double = (myfunction());

try {
    // code that can fail
    console.log("Its executing in a proper way");
    const double = myfunction()
    console.log(double);
} catch(e){
    // in case it fails, execute this
    console.log("Error!!!");
    console.error(e);
} finally {
    console.log("It will always execute, if there is or no error");
}


// InteralError, SyntaxError, TypeError, ReferenceError

