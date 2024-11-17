const animals = [
  { name: "lion", species: "feline", weight: 190 },
  { name: "elephant", species: "mammal", weight: 5400 },
  { name: "giraffe", species: "mammal", weight: 800 },
  { name: "tiger", species: "feline", weight: 220 },
  { name: "dolphin", species: "mammal", weight: 150 },
  { name: "kangaroo", species: "marsupial", weight: 85 },
  { name: "panda", species: "mammal", weight: 100 },
  { name: "eagle", species: "bird", weight: 6 },
  { name: "shark", species: "fish", weight: 1100 },
  { name: "penguin", species: "bird", weight: 30 }
];

// 1. Print each animal name into uppercase
animals.forEach(animal => console.log(animal.name.toUpperCase()));

// 2. Print animal name with "is awesome"
let awesomeAnimals = animals.map(animal => `${animal.name} is awesome`);
console.log(awesomeAnimals);

// 3. Print animal names that have more than 6 characters
let longNamedAnimals = animals.filter(animal => animal.name.length > 6);
console.log(longNamedAnimals);

// 4. Are there animal names that have G in them?

// Includes method
let containsG = animals.filter(animal => animal.name.includes("g"));
console.log(containsG);
// some method
let includesG = animals.some(animal => animal.name.includes("g"));
console.log(includesG);

// 5. Check if ALL animals have more than 10 characters
let whatever = animals.every(animal => animal.name.length > 10);
console.log(whatever);

// 6. reverse the order of the animal array
let reverseAnimals = animals.reverse();
console.log(reverseAnimals);

// 7. Filter by mammals and create new array with names followed by "is a mammal"
let mammals = animals.filter(function(animal) {
  return animal.species === "mammal";
});
let withIsAnMammal = [];
mammals.forEach(function(mammal) {
  let str = `${mammal.name} is a mammal`;
  withIsAnMammal.push(str);
});
console.log(withIsAnMammal);

let mammalString = mammals.map(mammal => `${mammal.name} is a mammal`);
console.log(mammalString);

// 8. Make a new array of the heaviest animal in each species
let heaviestAnimals = [];

let mammals1 = animals.filter(animal => animal.species === "mammal");
mammals1.sort();
console.log(mammals1);

let feline = animals.filter(animal => animal.species === "feline");
feline.sort();
console.log(feline);

let marsupial = animals.filter(animal => animal.species === "marsupial");
marsupial.sort();
console.log(marsupial);

let bird = animals.filter(animal => animal.species === "bird");
bird.sort();
console.log(bird);

let fish = animals.filter(animal => animal.species === "fish");
fish.sort();
console.log(fish);

let mammalWeight = mammals1.sort((a, b) => a.weight - b.weight);
console.log(mammalWeight[mammalWeight.length - 1]);

let felineWeight = feline.sort((a, b) => a.weight - b.weight);
console.log(felineWeight[felineWeight.length - 1]);

let birdWeight = bird.sort((a, b) => a.weight - b.weight);
console.log(birdWeight[birdWeight.length - 1]);

let marsupialWeight = marsupial.sort((a, b) => a.weight - b.weight);
console.log(marsupialWeight[marsupialWeight.length - 1]);

let fishWeight = fish.sort((a, b) => a.weight - b.weight);
console.log(fishWeight[fishWeight.length - 1]);

heaviestAnimals.push();
