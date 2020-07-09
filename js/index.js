// Create constants here
// =====================================

const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;

// =====================================

const dayInput = document.querySelector('#day-input');
const calculateButton = document.querySelector('#calculate-button');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

calculateButton.addEventListener('click', () => {
  let days = dayInput.value;
  let calcHours = days * hoursPerDay;
  let calcMinutes = calcHours * minutesPerHour;
  let calcSeconds = calcMinutes * secondsPerMinute;
  
  hours.innerText = `${calcHours} hours`;
  minutes.innerText = `${calcMinutes} minutes`;
  seconds.innerText = `${calcSeconds} seconds`;
});



//create an array of 4 students
//each array must be a json object
//the json object must have fields (age, name, favouriteMeals)
//the age is an integer, name is a string and favouriteMeals is an array of different types of foods

//using document.write, display the last student's favourite meals

//loop and display the name of the students

//write a function that accepts a student's name, checks and return the favouriteMeals of that student provided the name is present in the arrray of students.