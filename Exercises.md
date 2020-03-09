## Preparation Exercises

Exercise 5:
* substring - prototype
* create - prototype 
* fromCharCode - Static
* slice - prototype

Result: Got create wrong

Exercise 6:
index - true
CatName - false
snake_case - false
lazyDog - true
quick_Fox - false
1stCharacter - false
operand2 - true
BIG_NUMBER - false

Result: All correct

Exercise 7:
index - true
CatName - false
snake_case - false
lazyDog - true
quick_Fox - false
1stCharacter - false
operand2 - true
BIG_NUMBER - false

Result: All correct except CatName is also acceptable

Exercise 8:
index - true
CatName - true
snake_case - false
lazyDog - true
quick_Fox - false
1stCharacter - false
operand2 - true
BIG_NUMBER - true

Result: All correct

## The Basics Exercises

1. let fullName = 'William ' + 'Mooney';
2. Didn't understand the problem
3. Determine the datatype: 
* 'true' // String
* false // Boolean
* 1.5 // Number
* 2 // Number
* undefined // undefined
* { foo: 'bar' } // object

4. Identify which are statements or expressions:
* var foo; // statement
* foo = 5; // expression
* foo; // expression

5. Explain why this code logs '510' instead of 15.<br> 
console.log('5' + 10); <br>
Answer: The '5' is a string so when javascript goes to concatenate a string & a number it turns the number into a string also then joins them together to get '510'.
6. Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.<br>
console.log(Number('5') + 10)
7. Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console: The value of 5 + 10 is 15.<br>
console.log(`The value of ${Number('5')} + 10 is ${Number('5') + 10}.`);
8. Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? <br>
Answer: No, it will return undefined for that index and the previous indexs that were not assigned.
9. Create an array named names that contains a list of pet names. <br>
let names = ['asta', 'butterscotch', 'pudding', 'neptune', 'darwin']
10. Create an object named pets that contains a list of pet names and the type of animal. <br>
let pets = {
  asta:         'dog',
  butterscotch: 'cat',
  pudding:      'cat',
  neptune:      'fish',
  darwin:       'lizard',
};
11. What value does the following expression evaluate to?
'foo' === 'Foo' <br>
False
12. What value does the following expression evaluate to?
parseInt('3.1415') <br>
3
13. What value does the following expression evaluate to?
'12' < '9' <br>
Unsure...Answer was true because of a string of '9' being larger than '1'