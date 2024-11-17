// bracket and dot notation
const key = "1";
const obj = {
  key: console.log("the key is 'key'"),
  1: console.log("the key is 1")
};

// what will the following lines print?
console.log(obj[key]);
console.log(obj.key);
console.log(obj["key"]);

// Create an object with at least four properties, each with a different data type.
// Name one of the four properties "collection" and set its value to an Array or Object.
const cars = {
  collection: {
    make: "Mercedes",
    year: "2024",
    color: "black",
    twoDoor: true
  },
  planets: ["Mercury", "Earth", "Jupiter", "Mars", "Saturn"],
  state: {
    name: "Illinois",
    year: 1818,
    isDemocrat: true,
    population: 8000000
  },
  hasOilChange: false
};
// Access a value in the "collection" property
console.log(cars.state.population);
console.log(cars.planets[2]);
console.log(cars["collection"]["year"]);
// Practice with nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];
const newObj = {
  key: "the key is 'key'",
  1: "the key is 1"
};
// Add a method to an Object
newObj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};

// Fill in your favorite movie, number and color below
newObj["favorites"] = {
  movie: "Titanic",
  number: 19,
  color: "midnightBlue"
};

// Add a list (a.k.a array) to an Object
newObj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print?
// what do you expect to see on each line?
for (let key in keys) {
  console.log(newObj.favorites.movie);
}

// Use a template literal to print a sentence about your favorite things

// Access the values "b", 4, and 6 from obj.list

const movie = {
  critics: {
    1: "Bob",
    2: "Ben",
    3: "Colt",
    4: "Heath"
  },
  id: "tt0084787",
  title: "The Thing",
  rating: "R",
  year: 1982,
  director: "John Carpenter",
  cast: ["Kurt Russell", "Keith David", "Wilford Brimley"],
  musicBy: "Ennio Morricone"
};
if (movie.hasOwnProperty("rating")) {
  console.log("hasRating");
}
let values = Object.values(movie.critics);
console.log(values);
let keys2 = Object.keys(movie);
console.log(keys2);
let entries = Object.entries(movie);
console.log(entries);
for (let critic in movie.critics) {
  console.log(critic);
}
let user = {
  "1st name": "John"
};
console.log(user["1st name"]);
let key3 = "spoilers";
movie[key3] = "too soon";
console.log(movie.spoilers);
console.log(movie);
const r = [{ a: 1, b: 2, c: 3 }, 2, "ben", [1, 2, 3, 4]];
console.log(r[3][2]);
