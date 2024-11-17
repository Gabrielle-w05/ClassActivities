// refactor the functions below into arrow syntax
// 1.Function Declaration
function myNumberFunction() {
  return ((2 ** 2 + 3) % 4) * 14;
}
// 1. refactored into arrow syntax
// concise body
const myNumberFunction = () => ((2**2 + 3)% 4) * 14;
// block body
const myNumberFunction = () => {
  return 14;
};


// 2. Function Declaration
function greet(name) {
  return `Hello, ${name}`;
}
//2. Refactored into arrow syntax
const timeOfDayGreet = function(name, timeOfDay) {
  return `Hello, ${name}, good ${timeOfDay}`;
};

// 3. Function Declaration
function tripleAndHalf(num) {
  let triple = num * 3;
  return triple / 2;
}
// 3. Refactored as arrow syntax


function sumTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}
