// #1
let rlSync = require('readline-sync');

let currentAge = Number(rlSync.question("What's your age?\n"));

const calculateAge = (age) => {
  console.log(`You are ${age} years old.`);
  for(let i = 10; i <= 40; i += 10){
    console.log(`In ${i} years, you will be ${age + i} years old.`);
  }
};

calculateAge(currentAge);

// #2 - couldn't figure this one out

// #3 - Because in the conditional statement it's using an assignment operatior

// #4 - Wasn't sure

// #5 - Didn't think about a do while loop

// #6

const factorial = (num) => {
  if (num <=1) {
    return 1;
  } 
  
  return (num * factorial(num - 1));
}

