let unit = 0;
let tens = 0;

loopTens: while (true) {
  loopUnits: while (true) {
    console.log(`My current number is: ${tens}${unit}`);
    unit++;
    if (unit === 10) {
      unit = 0;
      break loopUnits;
    }
    if (tens === 2) {
      break loopTens;
    }
  }
  tens++;
}

console.log(`${tens}${unit}`);