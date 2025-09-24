// array-filtering.js

// Define a variable named numbers that references an array of numbers 1 through 10
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Define a function named evenNumbers that returns true if a number is even
function evenNumbers(number) {
  return number % 2 === 0;
}

// Use the filter method on the numbers array, passing in the evenNumbers function
// This will create a new array with only the even numbers
let filtered = numbers.filter(evenNumbers);

// Print the filtered array to the terminal
console.log(filtered);
