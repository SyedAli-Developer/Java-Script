// JavaScript Number Problems

// --__-_--_-_-_-_-----_---_---_--_-____----_---_-_-_____--_----_---_-----_-_-----__-__--__-___-__--_-_-

// 1. Round a Number
// Round the number 4.7 using Math.round().
// let num = 4.7;
// num = Math.round(num);
// console.log(num)

// --__-_--_-_-_-_-----_---_---_--_-____----_---_-_-_____--_----_---_-----_-_-----__-__--__-___-__--_-_-

// 2. Ceil a Decimal
// Use Math.ceil() to round 5.3 up to the next whole number.
// let num = 5.3;
// num = Math.ceil(num);
// console.log(num)

// --__-_--_-_-_-_-----_---_---_--_-____----_---_-_-_____--_----_---_-----_-_-----__-__--__-___-__--_-_-

// 3. Floor a Decimal
// Use Math.floor() to round 8.9 down to the previous whole number.
// let num = 8.9;
// num = Math.floor(num);
// console.log(num)

// --__-_--_-_-_-_-----_---_---_--_-____----_---_-_-_____--_----_---_-----_-_-----__-__--__-___-__--_-_-

// 4. Generate a Random Number (0–1)
// Create a function that returns a random number between 0 and 1 using
// Math.random().

// function randomNumber() {
//     return Math.random(); 
// }

// console.log(randomNumber());

// --__-_--_-_-_-_-----_---_---_--_-____----_---_-_-_____--_----_---_-----_-_-----__-__--__-___-__--_-_-

// 5. Random Integer (0–9)
// Generate a random whole number between 0 and 9.
// let num = Math.floor(Math.random()*10)
// console.log(num)

// --__-_--_-_-_-_-----_---_---_--_-____----_---_-_-_____--_----_---_-----_-_-----__-__--__-___-__--_-_-

// 6. Random Integer (1–100)
// Generate a random integer between 1 and 100.
// let num = Math.floor(Math.random()*100 +1)
// console.log(num)

// --__-_--_-_-_-_-----_---_---_--_-____----_---_-_-_____--_----_---_-----_-_-----__-__--__-___-__--_-_-

// 7. Convert String to Integer
// Use parseInt() to convert the string "42" into a number.
// let data = "42";
// let number = parseInt(data)
// console.log(data)
// console.log(number)

// --__-_--_-_-_-_-----_---_---_--_-____----_---_-_-_____--_----_---_-----_-_-----__-__--__-___-__--_-_-

// 8. Convert String to Float
// Use parseFloat() to convert "3.14159" into a floating point number.
// let num = "3.14159"
// let Float = parseFloat(num)
// console.log(num)
// console.log(Float)

// --__-_--_-_-_-_-----_---_---_--_-____----_---_-_-_____--_----_---_-----_-_-----__-__--__-___-__--_-_-

// 9. Round User Input
// Take a number from a form input, round it, and display the result on the page.
// const input = document.querySelector("#input")
// const result = document.querySelector("#result")
// function submit(){
//     input.value = Math.round(input.value)
//     result.textContent = input.value
//     input.value = null
// }

// --__-_--_-_-_-_-----_---_---_--_-____----_---_-_-_____--_----_---_-----_-_-----__-__--__-___-__--_-_-

// 10. Dice Simulator
// Simulate a 6-sided dice roll (returns a number between 1 and 6).
// function Dice() {
//     const diceRoll = Math.floor(Math.random() * 6) + 1;
//     console.log(diceRoll);
//     return diceRoll;
// }
// Dice();

// --__-_--_-_-_-_-----_---_---_--_-____----_---_-_-_____--_----_---_-----_-_-----__-__--__-___-__--_-_-

// 11. Temperature Rounding
// Round a temperature value (e.g., 36.6) to the nearest integer using Math.round().
// let tem = +prompt("Enter temperature in number")
// tem = Math.round(tem)
// alert(`Todays weather is ${tem}`)

// --__-_--_-_-_-_-----_---_---_--_-____----_---_-_-_____--_----_---_-----_-_-----__-__--__-___-__--_-_-

// 12. Ceil Shopping Price
// If the product price is $9.25, use Math.ceil() to charge the user $10.
// let productvalue = 9.25;
// let price = Math.ceil(productvalue)
// console.log(productvalue)
// console.log(price)

// --__-_--_-_-_-_-----_---_---_--_-____----_---_-_-_____--_----_---_-----_-_-----__-__--__-___-__--_-_-

// 13. Parse and Add
// Convert two string numbers like "10" and "5.5" using parseInt() and
// parseFloat() and add them.
// let num1 = "10"
// let num2 = "5.5"
// num1 = parseFloat(num1)
// num2 = parseFloat(num2)
// let calc = num1 + num2
// console.log(calc)
// // -----------------------------_--_--_-_-__-__-_
// num1 = parseInt(num1)
// num2 = parseInt(num2)
// calc = num1 + num2
// console.log(calc)

// --__-_--_-_-_-_-----_---_---_--_-____----_---_-_-_____--_----_---_-----_-_-----__-__--__-___-__--_-_-

// 14. Random Even Number (2–20)
// Generate a random even number between 2 and 20.
// let generator = Math.floor(Math.random()*9 +1) *2 
// console.log(generator)

// --__-_--_-_-_-_-----_---_---_--_-____----_---_-_-_____--_----_---_-----_-_-----__-__--__-___-__--_-_-

// 15. Check if Parsed Value is a Number
// Write a function that checks if parseInt(input) is a valid number (not NaN).
// const input = document.querySelector("#input")
// const result = document.querySelector("#result")
// function submit() {
//   const parsedValue = parseInt(input.value);
//   return !isNaN(parsedValue);
// }

// --__-_--_-_-_-_-----_---_---_--_-____----_---_-_-_____--_----_---_-----_-_-----__-__--__-___-__--_-_-

// 16. Round All Prices in Array
// Given an array of prices with decimals, return a new array with all prices rounded.
// let array = []
// for (let i = 0; i<5; i++) {
//     let random = Math.round(Math.random()*20+1)
//     array.push(random)
// }
// console.log(array)

// --__-_--_-_-_-_-----_---_---_--_-____----_---_-_-_____--_----_---_-----_-_-----__-__--__-___-__--_-_-

// 17. Simulate Coin Toss
// Use Math.random() to simulate a coin toss that returns "Heads" or "Tails".
// let random = Math.random()
// let round = Math.round(random)
// round += +1
// console.log(round)
// if(round == 1)
// {
//     console.log("Tail")
// }
// else if (round == 2)
// {
    
//     console.log("Head")
// }

// --__-_--_-_-_-_-----_---_---_--_-____----_---_-_-_____--_----_---_-----_-_-----__-__--__-___-__--_-_-

// 18. Random Integer within Range (Min–Max)
// Create a function that returns a random integer between any two numbers (inclusive).
// function submit(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     let newn = Math.floor(Math.random() * (max - min + 1)) + min;
//     console.log(newn);
// }

// --__-_--_-_-_-_-----_---_---_--_-____----_---_-_-_____--_----_---_-----_-_-----__-__--__-___-__--_-_-

// 19. Extract Number from Text
// Use parseFloat() to extract the number from "Total: 45.90 USD".
// let data = "45.90 USD"
// let number = parseFloat(data)
// console.log(number)

// --__-_--_-_-_-_-----_---_---_--_-____----_---_-_-_____--_----_---_-----_-_-----__-__--__-___-__--_-_-

// 20. Round to Nearest 0.5
// Given a decimal number, round it to the nearest 0.5 (e.g., 4.3 → 4.5, 4.1 → 4.0).

// const input = document.querySelector("#input");
// const result = document.querySelector("#result");
// function round(val) {
//     return Math.round(Number(val) * 2) / 2;
// }

// function submit() {
//     const rounded = round(input.value);
//     console.log("Original:", input.value);
//     console.log("Rounded:", rounded);
//     result.textContent = rounded; 
//     input.value = null
// }

// --__-_--_-_-_-_-----_---_---_--_-____----_---_-_-_____--_----_---_-----_-_-----__-__--__-___-__--_-_-