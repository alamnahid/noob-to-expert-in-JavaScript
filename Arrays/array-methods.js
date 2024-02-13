const cars = ['bmw', 'audi', 'volvo'];

// JavaScript Array length
console.log('check the length: ',cars.length);

//JavaScript Array at()
console.log('at ', cars.at(2))

//JavaScript Array join()

console.log(cars.join(' * '))

//JavaScript Array pop()
cars.pop()
console.log(cars)

//JavaScript Array push()
cars.push("Volvo")
console.log(cars)

// JavaScript Array shift()
cars.shift(); // remove the first array element
console.log(cars)

// JavaScript Array unshift()

cars.unshift("Nahid"); // add this in the first index of the array
console.log(cars)

//JavaScript Array concat()
const myboys = ["Nahid", "Jahid", "Tahid"];
const mygirls = ["Rima", "Tina", "Kina"];

const all = myboys.concat(mygirls); // this use for merging two arrays
console.log(all)

// console.log(cars.copyWithin(2, 0))
cars.splice(2,0, "Alam")
console.log(cars)
