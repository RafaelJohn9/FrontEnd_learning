// Exercise 1: Accessing Elements

// Select the div element by its ID
const myDiv = document.getElementById('myDiv');
console.log('Selected div:', myDiv);

// Select the button element by its ID
const myButton = document.getElementById('myButton');
console.log('Selected button:', myButton);

myButton.addEventListener('click', () => {
  myDiv.style.backgroundColor = 'red';
  myDiv.textContent = 'You got it bruv!😈';
  for (let i = 0; i < 10; i++) {
    myDiv.append(`${i}\n`);
  }
  console.log('Clicked!');
})
