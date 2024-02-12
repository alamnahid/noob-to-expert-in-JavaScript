 // string length

 const myname = "Nahid Alam";
 console.log(myname.length)

//  JavaScript String charCodeAt()
// The charCodeAt() method returns the code of the character at a specified index in a string

console.log(myname.charCodeAt(1));

//JavaScript String at()

console.log(myname.at(2))
console.log(myname[2])

// JavaScript String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.
let text2 = "Apple, Banana, Kiwi";
// let part = text2.slice(7, 13);

//If you omit the second parameter, the method will slice out the rest of the string:
// let part = text2.slice(7);

//If a parameter is negative, the position is counted from the end of the string:
let part = text2.slice(-7);
console.log(part);

// JavaScript String substring()

let str = "Apple, Banana, Kiwi";
let parts = str.substring(7, 13); // 7 to 12 index
let parts2 = str.substr(7); // 7 to 12 index

console.log(parts)
console.log(parts2)

// Converting to Upper and Lower Case

const name1 = "Nahid Alam";
const name2 = "Nahid Alam";

console.log(name1.toUpperCase());
console.log(name2.toLowerCase());

// JavaScript String concat()

const firsttext = "Nahid";
const lasttext = "Alam";

const textconcat = firsttext.concat(" ", lasttext);
console.log(textconcat);

// JavaScript String trim()
// The trim() method removes whitespace from both sides of a string

const trimtext = "          Hello World      ";
console.log(trimtext.trim());

// JavaScript String trimStart()
// ECMAScript 2019 added the String method trimStart() to JavaScript.
// The trimStart() method works like trim(), but removes whitespace only from the start of a string.

console.log(trimtext.trimStart());

//The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

console.log(trimtext.trimEnd());