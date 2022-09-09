// recurisividad
// calcul factorial de un numero entero
// factorial de 5 = 5 * 4 * 3 * 2 * 1

function factorial(num) {
  let fact = num;
  for (let i = num - 1; i > 0; i--) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorial(170));

function factorial_rec(num) {
  if (num === 1) return 1;
  return num * factorial_rec(num - 1);
}
