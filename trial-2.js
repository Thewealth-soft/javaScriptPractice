// ===>   NOTE: comment out each Question section before checking the output in the terminal.
2
let prompt = require("prompt-sync")({ sigint: true });

// ********************* Question 1 ************************

let name = prompt("Enter your first-Name and Last-Name: ");

let age = Number(prompt("Enter your age: "));
let currentYear = Number(prompt("Enter your current year: "));
// Number() Built-in function was used so as to convert string to Number before calculation
let earthlyAppearance = currentYear - age;
console.log(
  name +
    ", You are " +
    age +
    "years old and you came to earth in the year " +
    earthlyAppearance
);
// OR we use template string for easy code reading

console.log(
  `${name}, You are ${age}years old and you came to earth in the year ${earthlyAppearance}`
);

// // ************************** Question 2 ***************

let studentName = prompt("Enter your Name: ");
let studentAge = prompt("Enter your age: ");
let departmentName = prompt("Enter your Department Name: ");
let score = 34.72;

console.log(
  "Welcome " +
    studentName +
    ", You are in " +
    departmentName +
    "department, you are " +
    studentAge +
    "years old and your score is " +
    score
);
// OR we use template string for easy code reading
console.log(
  `Welcome ${studentName}, You are in ${departmentName}department, you are ${studentAge}years old and your score is ${score}`
);

// ************************** Question 2 ***************
let weight = Number(prompt("Enter your weight: "));
let poundsToKilogram = weight * 0.45;

console.log(`${poundsToKilogram}Kg`); // "Kg" the unit of kilogram
