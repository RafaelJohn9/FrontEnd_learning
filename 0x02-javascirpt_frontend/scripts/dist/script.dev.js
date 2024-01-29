"use strict";

// Exercise 1: Accessing Elements
// Select the div element by its ID
var myDiv = document.getElementById('myDiv');
console.log('Selected div:', myDiv); // Select the button element by its ID

var myButton = document.getElementById('myButton');
console.log('Selected button:', myButton);
myButton.addEventListener('click', function () {
  myDiv.style.backgroundColor = 'red';
  myDiv.textContent = 'You got it bruv!😈';

  for (var i = 0; i < 10; i++) {
    myDiv.append("".concat(i, "\n"));
  }

  console.log('Clicked!');
});