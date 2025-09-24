// looping-through-arrays.js

// Define a variable named pets that references an array of strings
let pets = ['cat', 'dog', 'rat'];

// Create a for loop to go through each item in the pets array
for (let i = 0; i < pets.length; i++) {
  // Change each string by adding 's' to make it plural
  pets[i] = pets[i] + 's';
}

// Print the updated pets array to the terminal
console.log(pets);
