const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let popRemove = nums.pop();
let popRemove2 = nums.pop();
console.log(nums);
// [6,5,2,3,4]
// remove each of the first two items with shift(), saving each item to a variable
let shiftRemove = nums.shift();
let shiftRemove2 = nums.shift();
console.log(nums);
// use push and unshift to add the variables back to the array in numerical order, 0-6
let pushAdd = nums.pushAdd(shiftRemove2, shiftRemove);
let unshifTAdd = nums.unshift(popRemove, popRemove2);
console.log(nums);
