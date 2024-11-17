// create an Array using an Array literal
const colors = ["Red", "Blue", "Green", ["teal", "Purple"]];
// access the 1st item in the Array
console.log(colors[0]); // red
// access the last item in the Array
console.log(colors[3][0]);
const color = colors[3][0];
console.log(color);
// print the length of the Array
colors.length;
console.log(colors.length);
// use the length property to access the last item in the Array
const lastItem = colors[colors.length - 1]; // subtract 1 to access the last item
console.log(lastItem);
// with for...of, loop over the Array, modify the value and add to a different Array
let newArray = [];
let index = 0;
for (let color of colors) {
  color += "More";
  // console.log(color);
  newArray[index] = color;
  index++;
  console.log(newArray);
}
