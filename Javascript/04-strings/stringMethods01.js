let str = "Im an string";
console.log(str.length);

let slice = str.slice(0, 10);
console.log(slice);


let substring = str.substring(0, 10);
console.log(substring);


let chain = "My name is Gorka";
chain.replace('Gorka','Juan');
console.log(chain.replace('Gorka','Juan'));

console.log(chain);


let longText = "mi nombre es pablito mi nombre es pablito mi nombre es pablito mi nombre es pablito mi nombre es pablito mi nombre es pablito";
console.log(longText.replace('mi nombre', 'mi numero'));
console.log(longText.replace(/mi nombre/g, 'mi numero'));

