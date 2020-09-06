function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function sum(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}

function multiply(arr) {
  let total = 1;
  for (let num of arr) {
    total *= num;
  }
  return total;
}

function power(num1, num2) {
  return num1 ** num2;
}

function factorial(num) {
  var total = 1;
  if (num === 0) {
    return 1;
  }
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
