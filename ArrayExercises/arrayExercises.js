// #1 - 4, 5, 1 but not completely sure, 3, 101

// #2 
let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

let newArr = myArray.filter((item)=> {
  return (item % 2 === 0);
});

console.log(newArr);

// #3

let myArray2 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

const getEvens = () => {
  let newArr2 = [];

  for(let i = 0; i < myArray2.length; i++) {
    for(let j = 0; j < myArray2[i].length; j++) {
      if(myArray2[i][j] % 2 === 0 && myArray2[i][j] != 0) {
        newArr2.push(myArray2[i][j]);
      }
    }
  }
  
  return newArr2;
}
 
console.log(getEvens());

// #4

let myArray3 = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newArr3 = myArray3.map((num) => {
  if(num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

// #5

let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

const removeNonInteger = (arr) => {
  return arr.filter((item) => {
    if(Number.isInteger(item)) {
      return item;
    }
  });
} 

let newArray = removeNonInteger(array);
console.log(newArray); // => [1, 3, -4]

// #6

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

const oddLengths = (array) => {
  return array.map((item) => {
    return item.length;
  }).filter(length => length % 2 != 0);
}

console.log(oddLengths(arr)); // => [1, 5, 3]

// #7
let numbers = [3, 5, 7];

const sumOfSquares = (nums) => {
  return nums.reduce((acc, cur) => {
    return acc + cur * cur;
  }, 0);
};

console.log(sumOfSquares(numbers)); // => 83

// #8

let arr2 = ['a', 'abcd', 'abcde', 'abc', 'ab'];

const oddLengths2 = (array) => {
  return array.reduce((acc, cur) => {
    if(cur.length % 2 != 0) {
      acc.push(cur.length);
    }

    return acc;
  }, [])
}

console.log(oddLengths2(arr2)); 

// #9 - Forgot about includes

// #10

let arr2 = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];
console.log(arr2[1][2]);