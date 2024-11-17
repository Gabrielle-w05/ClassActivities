// create a new unordered list (ul) element
const newUl = document.createElement("ul");
// remove the paragraph element in the nav-bar
let childToRemove = document.querySelector(".nav-bar > p");
childToRemove.remove();
// add your new ul element to the nav-bar
document.querySelector(".na-bar").appendChild(newUl);
// create two new list item (li) elements, and add some text to them
const newLIOne = document.createElement("li");
const newLITwo = document.createElement("li");

newLIOne.textContent = "I am the first new list element";
newLITwo.textContent = "I am the second new list element";
// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar > ul").appendChild(newLIOne);
document.querySelector(".nav-bar > ul").appendChild(newLITwo);
