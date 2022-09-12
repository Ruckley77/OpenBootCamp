// Lower case and uppercase methods


let input = "Escorpio";
let db = "escorpio";

console.log(input === db);

console.log(input,db);
console.log(input.toLowerCase() === db.toLowerCase());
console.log(input.toLowerCase(),db.toLowerCase());

// Concatenation
let str_1 = "FirstString";
let str_2 = "SecondString";

console.log(str_1.concat(" ",str_2));
console.log(str_1 + " " + str_2);
console.log(`${str_1} ${str_2}`);

// Trimming start or ending spaces
let str_3 = " Im a string with spaces at the end.    "

console.log(str_3.length);

console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

let str_4 = "Hi Im string number 4";

console.log(str_4.charAt(3));
console.log(str_4[3]);

let str_5 = "Im Juan and i love burgers, Juan is my name";

console.log(str_5.indexOf("Juan"));
console.log(str_5.lastIndexOf("Juan"));