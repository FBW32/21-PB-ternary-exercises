// ************PB EXERCISE 21 TERNARIES *******************

// # Programming Basics: Ternary

// These exercises are designed to make you more comfortable with the ternary operator.

// 1. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

let isDog;

// if ((isDog = true)) {
//   console.log("pat, pat");
// } else {
//   console.log("Find me a dog to pat!");
// }
// pat, pat

// condition: isDog
// value1: "pat, pat"
// value2: "Find me a dog to pat!"

isDog = true ? console.log("pat, pat") : console.log("Find me a dog to pat!");
// pat, pat

// 2. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.

console.log(Math.round(Math.random() * 100)); // 36
let speedCheck = parseInt("36km/h");

// If speedCheck is greater than 50km/h, print 'you're going too fast!'
// Else, print 'You're driving below the speed limit, Oma'.

// if (speedCheck > parseInt("50km/h")) {
//   console.log("You're going too fast");
// } else {
//   console.log("You're driving below the speed limit, Oma");
// }
// You're driving below the speed limit, Oma

// condition: speedCheck > 50
// value1: "You're going too fast"
// value2: "You're driving below the speed limit, Oma"

speedCheck > parseInt("50km/h")
  ? console.log("You're going too fast")
  : console.log("You're driving below the speed limit, Oma");
// You're driving below the speed limit, Oma

// 3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".

console.log(Math.floor(Math.random() * 100)); // 46
let age = 46;

// If age < 16, print "serve butter beer".
// Else, print "serve beer".

// if (age < 16) {
//   console.log("serve butter beer");
// } else {
//   console.log("serve beer");
// }
// serve beer

// condition: age
// value1: console.log("serve butter beer");
// values2: console.log("serve beer");

age < 16 ? console.log("serve butter beer") : console.log("serve beer");
// serve beer

// 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".

let isStudent;

// condition: isStudent
// value1: true
// value2: false

isStudent = true
  ? console.log("Ticket costs €5,00")
  : console.log("Ticket costs €12,00");
// Ticket costs €5,00

// 5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".

let okMarie = "cake";

// condition: okMarie
// value1: cake
// values2: no cake

okMarie === "cake"
  ? console.log("Let them eat cake")
  : console.log("Oh, bother");
// Let them eat cake

// 6. Check if the following numbers are even numbers. Use a ternary and if the number is even print `30 is even`, else print that it is odd.
// * 30
// * 939
// * 40.9

30 % 2 === 0 ? console.log("30 is even") : console.log("30 is odd");
// 30 is even

939 % 2 === 0 ? console.log("939 is even") : console.log("939 is odd");
// 939 is odd

40.9 % 2 === 0 ? console.log("40.9 is even") : console.log("40.9 is odd");
// 40.9 is odd
