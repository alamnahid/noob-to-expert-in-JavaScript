const cars = ["volvo", "bmw", "audi"];
console.log(cars)

cars[0] = "mercedeze";
console.log(cars)

// check the length of the array 
console.log(cars.length)

// array sort
console.log(cars.sort())

// accessing the first element of the array
console.log(cars[0]);

// accesing the last element of the array

console.log(cars[cars.length-1])

// access all the values using for loop

for (let i = 0; i<cars.length; i++){
    console.log('loop ',cars[i])
}

// array push in a element
cars.push("Nahid")
console.log(cars)

// pop an element to remove data from the array
cars.pop();
console.log(cars)