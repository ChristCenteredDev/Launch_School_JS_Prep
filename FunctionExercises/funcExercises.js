// #1: It logs 1

// #2
let rlSync = require('readline-sync');

function greet() {
  let firstName = rlSync.question("What's your first name?\n");
  let lastName = rlSync.question("What's your last name?\n");
  
  return `Hello, ${firstName} ${lastName}!`;
}

console.log(greet());

// #3 

function multiply() {
  let num1 = rlSync.question("First number?\n");
  let num2 = rlSync.question("Second number?\n");
  
  return num1 * num2;
}

console.log(multiply());

// #4 - didn't understand how to use previous code to do the factorial

// #5 - Logs undefined because the return is ended without anything on it

// #6 - Logs nothing due to no console log
