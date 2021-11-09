const add = function(num1, num2) { 
  return num1 + num2; 
};

const subtract = function(num1, num2) {
  return num1 - num2; 
};

const sum = function(arrToSum) {
  let sum = 0; 
  for (let i = 0; i < arrToSum.length; i++) {
    sum += arrToSum[i];
  }

  return sum; 
};

const multiply = function(arrToMultiply) {
  let product = 1; 
  for (let i = 0; i < arrToMultiply.length; i++) {
    product *= arrToMultiply[i];
  }

  return product; 
};

const power = function(base, exponent) {
	return base ** exponent; 
};

const factorial = function(num) {
	num = Math.round(num); // handle non-integer inputs by rounding
  
  let factorial = 1; 
  for (let i = num; i > 0; i--) {
    factorial *= i; 
  }

  return factorial; 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
