// Define a name and show it on the screen
const name = 'Hermione';
const nameElement = document.getElementById('name');
nameElement.textContent = name;

// Define an age and show that on the screen
const age = '11';
const ageElement = document.getElementById('age');
ageElement.textContent = age;

// Create css classes for is good/not
// Show the right word/class styles on the screen depending.
const isGood = false;
const goodClass = isGood ? 'good' : 'not-good';
const isgoodElement = document.getElementById('is-good');
isgoodElement.textContent = isGood;
isgoodElement.className = goodClass;