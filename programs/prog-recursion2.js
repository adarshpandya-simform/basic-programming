/* factorial using recursion */

const factorial = (number) => {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
};

console.log(factorial(5));
console.log(factorial(7));
console.log(factorial(9));
