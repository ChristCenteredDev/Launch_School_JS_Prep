// #1 
false || (true && false); // false
true || (1 + 2); // true
(1 + 2) || true; // true
true && (1 + 2); // true
false && (1 + 2); // false
(1 + 2) && true; // true
(32 * 4) >= 129; // true, actually false
false !== !true; // false
true === 4; // false
false === (847 === '847'); // true
false === (847 == '847'); // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // true

// #2

const evenOrOdd = (num) => num % 2 === 0 ? 'even' : 'odd';

// #3
const evenOrOdd2 = (num) => {
  if (Number.isInteger(num)) {
    return num % 2 === 0 ? 'even' : 'odd';
  } else {
    var e = new Error(`Input isn't a valid number.`); 
    throw e;
    return;
  }
}

// #4 - It logs "Product2, Product3, then Product not found!" because the case statements are missing a break key word

// #5
if(foo()) {
  return 'bar';
} else {
  return qux();
}

// #6 - Not empty

// #7 

const capsOrNot = (str) => {
  if(str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

// #8 

const numberRange = (num) => {
  if(num >= 0 && num <= 50) {
    return `${num} is between 0 and 50`;
  } else if(num >= 51 && num <= 100) {
    return `${num} is between 51 and 100`;
  } else if(num > 100) {
    return `${num} is greater than 100`;
  } else if(num < 0) {
    return `${num} is less than 0`;
  }
}