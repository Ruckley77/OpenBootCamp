function fibonacci(num){
    let arrayfib = [];
    let fibnumber = 1
    
    for(i = 0; i < num; i++){
        arrayfib = [...arrayfib, fibnumber]
        if(fibnumber === 1){
            arrayfib = [...arrayfib, fibnumber]
            i = 1
        } 
        fibnumber = fibnumber + arrayfib[(i-1)]
    }
    return arrayfib
}

const numeroFib = fibonacci(7);
console.log(numeroFib);