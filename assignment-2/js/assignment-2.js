// prompt to ask user for name
let user = prompt("Let's play the sum game.\nPlease enter your name");
// prompts to ask user for two numbers and assigns those numbers to variables
let x = prompt("Enter first number");
let y = prompt("Enter second number");
// uses parseInt to find numbers and assigns those numbers to variables
let num1 = parseInt(x);
let num2 = parseInt(y);
// assign sum variable to sum of numbers
let sum = num1 + num2;
// replace answer div
document.getElementById("answer").innerHTML =
"Hi, " + user + "! The sum of " + num1 + " + " + num2 + " is " + sum;
