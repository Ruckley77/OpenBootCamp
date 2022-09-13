const today = new Date()

const birthday = new Date("October 31, 1998")
console.log(birthday);

const compareDate = (today.getTime() > birthday.getTime())
console.log(compareDate);

const birthdayMonth = birthday.getMonth() + 1;
console.log(birthdayMonth);

const birthdayYear = birthday.getFullYear();
console.log(birthdayYear);