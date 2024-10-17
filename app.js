//import functions

import multiply, { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';
import { addAndLogUpper } from './mathModule.js';
 
// Call the functions and log results 


console.log('subtract: ', subtract(5, 3)); 
console.log('Uppercase: ', toUpperCase('hello'));  
console.log('Multiply: ', multiply(4, 7));
console.log('Maximum: ', findMax([2, 4, 6, 8, 11]));
console.log('Reverse: ', reverseArray([1, 2, 3, 4, 5, 6]));

addAndLogUpper(10, 20);

//final challenge

let numArray = [2, 4, 7, 8, 22];
let x = findMax(numArray);
let y = 5;
let finalChallenge = toUpperCase(multiply(x,y).toString());

console.log('Final challenge:', (finalChallenge));
