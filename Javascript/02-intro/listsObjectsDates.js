const list = [1, "hi", true, undefined, null]
const list2 = new Array(1, "hi", true, undefined, null);
const list3 = new Array(3);
const list4 = new Array(list,list2,list3);

list3[0] = "First Element";

console.log(list,list2);
console.log(list3);
console.log(list4);


const phone = {
    height: 10,
    width: 5,
    brand: "Xiami",
    isWhite: false,
    contacts: new Array("Gorka","Juan","Kogi","Io"),
    card: {
        brand: "Sandisk",
        capacityMb: 32,
    }
}

phone.year = 2019;

console.log(phone.contacts);
console.log(phone.card.brand);
console.log(phone.year);


//moment.js for dates

const now = new Date()
console.log(now);

const date_milisec = new Date(10)
console.log(date_milisec);

const date_string = new Date("March 25 2020")
console.log(date_string);

const date_values = new Date(2022, 0, 30);
console.log(date_values);

const day = now.getDate();
const month = now.getMonth() + 1;
const year = now.getFullYear();

console.log(day,month,year)
