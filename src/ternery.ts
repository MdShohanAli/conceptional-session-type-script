const isHeroAvail = false;

// if (isHeroAvail) {
//     console.log('book Now');

// }
// else {
//     console.log('You can not book');

// }
//  ternary operator 
const checkAvailablity = isHeroAvail ? 'book now' : 'you can not book';
// conditional ? true_value : false_value
// console.log(checkAvailablity);

// nullish  operator (??)
// check null and undefined
// null and undefined  hole ?? pore ta angso tuko k check kore dekbe 
//  null undefined bade onno value dile same value return kore dibe 

/**
 * null = no input
 * null = no input
 * hello = hello
 * 4 = 4
 * true = true
 * false = false 
 * 
 * **/


const inputSomething: unknown = undefined;

const checkInput = inputSomething ?? "No Input";
console.log(checkInput);

