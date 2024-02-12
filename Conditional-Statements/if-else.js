// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false

const age = 18;

if(age === 18){
    console.log('You are eligible for vote')
}
else if(age > 18){
    console.log('You are not eligible for vote')
}
else if(age < 18){
    console.log('You are eligible for vote')
}
else{
    console.log('something wrong!!')
}