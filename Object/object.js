// const person = {
//     name: 'Nahid Alam',
//     age: 23,
//     gender: 'male'
// }

const person = {
    firstname: 'Nahid',
    lastname: 'Alam',
    age: 23,
    gender: 'male',
    fullname: function fullname(){
        return this.firstname + " " + this.lastname;
    }
}

console.log(person.fullname()); // print full object

// accessing object properties 
// console.log(person.name);
// or 
// console.log(person["name"]);

// object methods 

