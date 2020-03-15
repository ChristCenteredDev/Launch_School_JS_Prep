// #1

let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

console.log(person.name);

// #2

1 // valid
'1' // valid
undefined // not valid, incorrect
'hello world' // valid
true // not valid, incorrect
'true' // valid

// #3 

// #4

// #5

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = new Object(myProtoObj);

console.log(myObj);

// #6

myObj['qux'] = 3; 
console.log(myObj);

// #7 - new Object(object) does this

// #8 - both are 'hi', incorrect.  first is 'hi' second 'hello'
