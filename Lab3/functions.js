"use strict";

// a) computeSumOfSquares using function expression
const computeSumOfSquares = function(arr) {
  return arr.map(x => x * x).reduce((acc, val) => acc + val, 0);
};
console.log("Sum of squares:", computeSumOfSquares([1, 2, 3])); // 14

// b) printOddNumbersOnly using arrow function
const printOddNumbersOnly = arr => {
  arr.filter(x => x % 2 !== 0).forEach(x => console.log("Odd number:", x));
};
printOddNumbersOnly([1, 2, 3, 4, 5]);

// c) printFibo using regular function
function printFibo(n, a, b) {
  const fibo = [];
  for (let i = 0; i < n; i++) {
    fibo.push(a);
    [a, b] = [b, a + b];
  }
  console.log("Fibonacci sequence:", fibo.join(", "));
}
printFibo(10, 0, 1);
