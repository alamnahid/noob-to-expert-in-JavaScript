// assignment operator 

const x = 5;
const y = 5;

// arithmatic operator 

const sum = x+y; // addition 
const sub = x-y; // subtraction
const mul = x*y; // multiplication
const exponentation = x**y; // exponentation
const division = x/y; // division
const mod = x%y; // modulus
// const increament = x++; //increament
// const decreament = x--; // decreament


console.log('summation ', sum);
console.log('subtraction ', sub);
console.log('multiplication ', mul);
console.log('exponentation ', exponentation);
console.log('division ', division);
console.log('modulus ', mod);
// console.log('increaent ', increament);
// console.log('decreament ', decreament);

// comparison operator 

const equalto = x==y; // equal to
const equaltype = x===y; // equal to and type
const notequal = x!=y; // not equal
const notequaltype = x!==y; // not equal and type check
const gt = x>y; // grater then
const lt = x<y; // less then
const gtequal = x>=y; // grater than and equal to
const ltequal = x<=y; // less then and equal to

console.log('ternary operator ', x?y:x);
console.log('equal to ', equalto);
console.log('not equal to ', notequal);
console.log('not equal to and type ', notequaltype);
console.log('grater than ', gt);
console.log('less then ', lt);
console.log('grater than and equal to ', gtequal);
console.log('less then and equal to ', ltequal);

// javascript string comparison 

const text1 = "D";
const text2 = "C";
const result = text1 < text2;
console.log(result)

// addition string with number 

const num1 = "5";
const num2 = 5;
console.log(num1+num2);

// javascript logical operator 

const logicaland = x&&y;
const logicalor = x||y;
// const logicalnot = x!y;

console.log('logical and ', logicaland)
console.log('logical or ', logicalor)

// type operators 

console.log(typeof(x));
console.log(x instanceof Array);