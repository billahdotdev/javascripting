# NodeSchool Javascripting Workshop Topics

Welcome! This repository covers the **20 essential topics** from the NodeSchool [Javascripting](https://nodeschool.io/#workshoppers) workshop — a fantastic way to build strong JavaScript fundamentals.

Each topic includes:
- What the concept is and why it matters
- Simple examples you can run immediately
- Tips to help you understand and remember

---

02. Variables

What are variables?
Variables are containers where you can store data, like names, numbers, or any other value.

Use const for values that don’t change.

Use let for values that might change later.

const name = 'Alex';  // This name won’t change
let age = 25;         // This age might change


Tip: Always use meaningful variable names to make your code readable.

03. Strings

What is a string?
Strings are sequences of characters used to represent text. They are written inside single (') or double (") quotes.

const greeting = "Hello, Alex!";

04. String Length

How do we find the length of a string?
Use .length property to count how many characters a string has.

const word = "Gender";
console.log(word.length);  // Output: 6

05. Revising Strings

How can we change parts of a string?
Use .replace() method to substitute part of a string with something else.

const sentence = "JavaScript is fun";
const newSentence = sentence.replace("fun", "awesome");
console.log(newSentence);  // Output: JavaScript is awesome

06. Numbers

Working with numbers
JavaScript lets you store and manipulate numbers easily.

const score = 100;

07. Rounding Numbers

How to round decimals to whole numbers?
Use Math.round() to round a decimal number to the nearest integer.

const pi = 3.14;
console.log(Math.round(pi));  // Output: 3

08. Number to String

Converting numbers to strings
Sometimes, you need to treat numbers as text. Use .toString() to convert.

const num = 123;
console.log(num.toString());  // Output: "123"

09. If Statement

Making decisions in code
if statements let your program make choices based on conditions.

const age = 18;

if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You are too young.");
}


Tip: Think of it like asking a question and acting on the answer.

10. For Loop

Repeating actions multiple times
for loops let you run the same code again and again, with a counter.

for (let i = 0; i < 5; i++) {
  console.log(i);
}


Tip: Loops save you from writing repetitive code manually.

11. Arrays

Storing lists of items
Arrays hold multiple values in a single variable. You can access items by their position (index).

const colors = ['red', 'green', 'blue'];
console.log(colors[0]);  // Output: red

12. Array Filtering

Picking specific items from arrays
Use .filter() to create a new array with only items that meet certain conditions.

const nums = [1, 2, 3, 4, 5];
const even = nums.filter(n => n % 2 === 0);
console.log(even);  // Output: [2, 4]

13. Accessing Array Values

Getting specific values
Retrieve individual items from arrays using their index.

const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[1]);  // Output: banana

14. Looping Through Arrays

Processing every item
Use a loop to work with each item in an array.

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

15. Objects

Grouping related data
Objects store data as key-value pairs, representing properties and their values.

const person = {
  name: 'Alex',
  age: 30
};

16. Object Properties

Accessing data inside objects
Use dot notation to get the value of a property.

console.log(person.name);  // Output: Alex

17. Object Keys

Listing all keys in an object
Use Object.keys() to get an array of all property names.

console.log(Object.keys(person));  // Output: ['name', 'age']

18. Functions

Reusable blocks of code
Functions perform tasks when you call them.

function greet(name) {
  return 'Hello ' + name;
}
console.log(greet('Alex'));  // Output: Hello Alex

19. Function Arguments

Giving input to functions
Functions can take inputs (arguments) to customize what they do.

function add(a, b) {
  return a + b;
}
console.log(add(5, 7));  // Output: 12

20. Scope

Where variables are accessible
Variables declared inside a function are only visible inside it. Variables declared outside are globally accessible.

const a = 1;

function test() {
  const b = 2;
  console.log(a);  // Output: 1
  console.log(b);  // Output: 2
}

test();
console.log(b);  // Error: b is not defined


Tip: Understanding scope helps prevent errors and manage data flow.





