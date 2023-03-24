const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce((sum, current) => sum + current, 0);

const multiply = (arr) => arr.length ? arr.reduce((accumulator, nextValue) => accumulator * nextValue) : 0;

const power = (a, b) => Math.pow(a, b);

const factorial = (n) => {
  let product = 1;
  for (let i = n; i >= 1; i--) {
    product *= i;
  }
  return product;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
