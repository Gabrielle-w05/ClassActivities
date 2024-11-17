let characters = [
  "SpongeBob",
  "Bugs Bunny",
  "Tom",
  "Jerry",
  "Scooby-Doo",
  "Mickey Mouse"
];

characters.push("Homer Simpson");
characters.unshift("Bart Simpson");
console.log(characters.length);
console.log(characters);

if (characters[0].length > 8) {
  let remove = characters.shift();
  console.log(remove);
}

if (characters[characters.length - 1].length > 8) {
  let remove = characters.pop();
  console.log(remove);
}
console.log(characters[0]);

if (characters.includes("Tom")) {
  let index = characters.indexOf("Tom");
  characters.splice(
    index,
    1,
    "Donald Duck",
    "Daffy Duck",
    "Snoopy",
    "Elmo",
    "Cookie Monster"
  );
}

console.log(characters);

let startedIndex = Math.floor(characters.length / 3);
let endedIndex = Math.floor(characters.length / 3) * 2;

let sliceCharacters = characters.slice(startedIndex, endedIndex);
console.log(sliceCharacters);

let newArray = ["Dora", "Naruto", "Squidward"];
let newCharacters = characters.concat(newArray);
console.log(newCharacters);

let reverseArray = newCharacters.reverse();
console.log(reverseArray);

let splitIndex = Math.floor(newCharacters.length / 2);
let firstHalf = newCharacters.slice(splitIndex);
let secondHalf = newCharacters.slice(splitIndex);
console.log(newCharacters);
console.log(firstHalf);
console.log(secondHalf);
firstHalf.reverse();
secondHalf.reverse();
console.log(firstHalf, "reversed");
console.log(secondHalf, "reversed");

let concatenatedArray = firstHalf.concat(secondHalf);
firstHalf.splice(0, newCharacters.length, firstHalf, secondHalf);
console.log(newCharacters, " this is the final result.");
