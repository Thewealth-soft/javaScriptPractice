// ===>   NOTE: comment out each Question section on after the order before checking the output in the terminal.

let prompt = require("prompt-sync")({ sigint: true });


// ********************* Question 1 ************************

let integerNum = parseInt(prompt("Enter an integer number: "));

if (integerNum % 2 !== 0) {
  console.log("Weird");
} else {
  if (integerNum >= 2 && integerNum <= 5) {
    console.log("Not Weird");
  } else if (integerNum >= 6 && integerNum <= 20) {
    console.log("Weird");
  } else {
    console.log("Not Weird");
  }
}

// ********************* Question 2 ************************

let inputNum1 = Number(prompt("Enter a the first Number: "));
let operator = prompt("Enter an Arithmetic operators(+, -, / ,*)");
let inputNum2 = Number(prompt("Enter a the second Number: "));

if (operator === "+") {
  // if (operator !== '+') {
  //   console.log('Incorrect input')
  // } else {
  //     console.log(inputNum1 + inputNum2);
  // }
} else if (operator === "-") {
  console.log(inputNum1 - inputNum2);
} else if (operator === "/") {
  console.log(inputNum1 / inputNum2);
} else if (operator === "*") {
  console.log(inputNum1 * inputNum2);
}
// Note: if an incorrect operator is input there will be no output in the terminal



// ********************* Question 3 ************************

/*
let housePrice = 1000000;
let userBudget = Number(
  prompt("Enter your budget let calculate your downpayment: ")
);
if (((userBudget >= 300000 && userBudget < 500000) * 10) / 100) {
  console.log(
    `The downpayment is ${userBudget}, Congratulation you can afford it.`
  );
} else if (userBudget > 500000) {
  console.log(
    `The downpayment is ${userBudget}, Congratulation you can afford it.`
  );
} else {
  console.log(`The house price is ${housePrice},You can not afford it`);
} */



// More improved and readable version below
let housePrice = 1000000;
let userBudget = Number(
  prompt(
    "The price of house is #1000000, Enter your house budget so as to show your downpayment: "
  )
);
let downPaymentPercent;
if (userBudget >= 300000 && userBudget < 500000) {
  downPaymentPercent = 10/100; // or 0.1
} else if (userBudget > 500000) {
  downPaymentPercent = 20/100; // or 0.2
} else {
  downPaymentPercent = 0;

  console.log(`The house price is ${housePrice}, You can not afford it`);
}

let downPayment = userBudget * downPaymentPercent;

console.log(downPayment);




// ********************* Question 4 ************************



// First question
let question1 = "What is the full name of nigeria president?";
let answer1 = "Bola Ahmed Tinubu";

let userAnswer1 = prompt(question1);

if (userAnswer1.toLowerCase() === answer1.toLowerCase()) {
   score = 1;
  console.log("Correct!");
} else {
   score = 0;
  console.log("Incorrect!");
}

// Second question
let question2 = "What is the name of our Instructor?";
let answer2 = "Mr. Solomon";

let userAnswer2 = prompt(question2);

if (userAnswer2.toLowerCase() === answer2.toLowerCase()) {
  score += 1;
  console.log("Correct!");
} else {
  console.log("Incorrect!");
}

// Third question
let question3 = "Who is the best footballer in the world?";
let answer3 = "Leo Messi";

let userAnswer3 = prompt(question3);

if (userAnswer3.toLowerCase() === answer3.toLowerCase()) {
  score += 1;
  console.log("Correct!");
} else {
  console.log("Incorrect!");
}


console.log(`Quiz completed. Your score is ${score}/3`);
