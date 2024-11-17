let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values
x = false;
y = 0;
z = {};
// print x, y, and z
console.log(x);
console.log(y);
console.log(z);
const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values
// const a = "gabby";
// const b = false;
// const c = false;
// using BRACKET NOTATION, assign a value to b
b[0] = "gabby";
console.log(b);
// using DOT NOTATION, assign a PROPERTY to c
c.name = "gabby";
console.log(c);
// using DOT NOTATION, assign a METHOD to c

// using BRACKET NOTATION, call the method in c

// print a, b, and c
