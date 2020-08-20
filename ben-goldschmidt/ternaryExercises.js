// Programming Basics: Ternary
// These exercises are designed to make you more comfortable with the ternary operator.

console.log("QUESTION 1")
// Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'
let isDogChance = [true, false]
let isDog = isDogChance[Math.floor(Math.random() * isDogChance.length)];

let patDog = (isDog) ? "pat, pat!" : "find me a dog to pat!";
console.log(patDog);
// find me a dog to pat



console.log("")
console.log("QUESTION 2")
// Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma!'.
let speedLimit = 50;
let currentSpeed = Math.floor(Math.random() * 80) + 0;

let speedCheck = (currentSpeed > speedLimit) ? "you're going too fast!" : "You're driving below the speed limit, Oma!";
console.log(speedCheck);
// You're driving below the speed limit, Oma!



console.log("")
console.log("QUESTION 3")
// Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".
let ageLegalAge = 16;
let currentAge = Math.floor(Math.random() * 100) + 0;

let ageCheck = (currentAge < ageLegalAge) ? "serve butter beer!" : "serve beer!";
console.log(ageCheck);
// serve beer!



console.log("")
console.log("QUESTION 4")
// Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".
let isStudentResult = [true, false]
let isStudent = isStudentResult[Math.floor(Math.random() * isStudentResult.length)];

let isStudentCheck = (isStudent === true) ? "Ticket costs €5,00!" : "Ticket costs €12,00!";
console.log(isStudentCheck);
// 



console.log("")
console.log("QUESTION 5")
// Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".
let isCakeChance = ["cake", "no cake"]
let isCake = isCakeChance[Math.floor(Math.random() * isCakeChance.length)];

let okMarie = (isCake === "cake") ? "Let them eat cake!" : "Oh, bother!";
console.log(okMarie);
// 




console.log("")
console.log("QUESTION 6")
// Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.

// THUS
// if x is even ---> divisable by 2, print even
// else, print- odd 

// 30
// 939
// 40.9

// VALUES
let num1 = 30;
let num2 = 939;
let num3 = 40.9;


// RESULTS ALGORITHM
// let numX = 10;
// let resultX = (numX % 2 === 0) ? "even" : "odd";
// console.log(resultX)

let result1 = (num1 % 2 === 0) ? "even" : "odd";
console.log(result1)
// even

let result2 = (num2 % 2 === 0) ? "even" : "odd";
console.log(result2)
// odd

let result3 = (num3 % 2 === 0) ? "even" : "odd";
console.log(result3)
// odd
