// Working with dates

const date = new Date()

console.log(date);

const date2 = new Date(1987, 10)
console.log(date2);

const date3 = new Date(-10000000000000)
console.log(date3);

const date4 = new Date("October 13, 1979 12:15:15")
console.log(date4);


console.log(date > date2);

const date5 = new Date(1987, 10)

console.log(date5 === date2);

console.log(date2.getTime());
console.log(date5.getTime());

console.log(date2.getTime() === date5.getTime());

// Obtain day, month and year.

console.log(date2.getDate());
console.log(date2.getMonth() + 1);
console.log(date2.getFullYear());

console.log(date2);

//.toLocaleDateString
console.log(date2.toLocaleDateString());