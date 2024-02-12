// JavaScript String indexOf()
// The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found

const text1 = "I am Nahid Alam Nahid";

console.log(text1.indexOf('Nahid'));
console.log(text1.indexOf('is'));

console.log(text1.lastIndexOf('Nahid'));

let text2 = "Please locate where 'locate' occurs!";

console.log(text2.search("locate"));

let text3 = "The rain in SPAIN stays mainly in the plain";
console.log(text3.match("ain"));



// string includes 
// it return true or false
let text4 = "Hello world, welcome to the universe.";
console.log(text4.includes("world"))


// JavaScript String startsWith()

let text5 = "Hello world, welcome to the universe.";
console.log(text5.startsWith("Hello"));

// JavaScript String endsWith()


let text6 = "Hello world, welcome to the universe.";
console.log(text6.endsWith("Hello"));