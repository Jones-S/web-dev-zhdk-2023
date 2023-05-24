console.info("Everything looks fine ✅.");
console.log("Open this script.js file and write your code...");

// write a function that multiplies three numbers
// that could be passed into the function as parameters (inputs)

// execute the function and log the result to the console.

// const number1 = 3;
// const number2 = 1;
// const number3 = 2;

// console.log(number1 * number2 * number3);

function multiply(number1, number2) {
  return number1 * number2;
}

const result = multiply(1, 2, 4);

console.log("result: ", result);

function multiplyWithObject(numbers) {
  return numbers.a * numbers.b * numbers.c;
}

const myNumbers = {
  c: 10,
  a: 1,
  b: 2,
  otherkey: "name",
};
multiplyWithObject(myNumbers);
