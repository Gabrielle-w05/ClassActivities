// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let seafood = "oyster";
let wage = 135000;
let isBaller = true;
let completeunderstanding;
let myUserProfile = null;
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(
  typeof seafood,
  typeof wage,
  typeof isBaller,
  typeof completeunderstanding,
  typeof myUserProfile
);
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let str = `Now that I make ${wage}, I can buy lot of ${seafood}`;
// reassign the value of the variable that references "null"
myUserProfile = "saxophone21";
// print the value and its type
console.log(myUserProfile, typeof myUserProfile);
// print a variable that causes a ReferenceError
let foobar = "foobar";
console.log(foobar);
// alter the previous line to no longer cause a ReferenceError
