// #1 - logs [1, 2, 3]

// #2 - Error occured in exercise.js line 4 because greeting isn't defined

// #3

result = Math.sqrt(37);

// #4 - Math.max

// #5 - splits the string between spaces then reverses the array of strings then returns the individual strings length

// #6 

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

const allMatches = (arr, regex) => {
  let result = arr.filter(string => {
    if(string.match(regex)) {
      return string;
    }
  });

  return result;
}

allMatches(words, /lab/); // ['laboratory', 'flab', 'elaborate']

// #7 - Exception handling allows your program to catch and error and do something with it instead of just crashing