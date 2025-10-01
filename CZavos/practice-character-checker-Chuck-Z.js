const input = require('readline-sync');
let string1 = input.question("Enter a string: ");
let index1 = input.questionInt("Enter an index number: ");
character = string1[index1];
console.log("The character at index " + index1 + " is: " + character + ".");
