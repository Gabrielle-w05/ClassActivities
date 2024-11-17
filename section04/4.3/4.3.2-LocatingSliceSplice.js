const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firstA = arr.indexOf("a");
let firstB = arr.indexOf("b");
let firstC = arr.indexOf("c");
// find the last index of "a", "b", and "c"
let lastA = arr.lastIndexOf("a");
let lastB = arr.lastIndexOf("b");
let lastC = arr.lastIndexOf("c");
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"
function removeDuplicate(array, duplicateValue) {
  let firstIndex = array.indexOf(duplicateValue);

  for (
    let i = array.lastIndexOf(duplicateValue);
    i > firstIndex;
    i = array.lastIndexOf(duplicateValue)
  ) {
    array.splice(i, 1);
  }
  console.log(array);
  return array;
}
removeDuplicate(arr, "c");
console.log(arr);
