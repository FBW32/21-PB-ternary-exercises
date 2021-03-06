// # Programming Basics: Ternary

// These exercises are designed to make you more comfortable with the ternary operator. 

// 1. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'
let isDog = 'isDog';
console.log((isDog === 'isDog') ? 'pat, pat' : 'find me a dog to pat'); // pat, pat

// 2. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.
let speedCheck = 55;
let speedLimit = (speedCheck < 50) ? `You're driving below the speed limit, Oma` : `You're going too fast`;
console.log(speedLimit); // You're driving below the speed limit, Oma

// 3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".
let age = 15;
console.log((age < 16) ? `serve butter beer` : `serve beer`); // serve butter beer

// 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".
let student = 'isStudent';
console.log((student === 'isStudent') ? `Ticket costs €5,00` : `Ticket costs €12,00`); // Ticket costs €5,00

// 5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother". 
let okMarie = 'cake';
console.log((okMarie == 'cake') ? `Let them eat cake` : `Oh, bother`); // Let them eat cake

// 6. Check if the following numbers are even numbers. Use a ternary and if the number is even print `30 is even`, else print that it is odd.
// * 30
// * 939
// * 40.9

let a = 30;
let b = 939;
let c = 40.9;

console.log(a === b === c); // false

console.log(a + ' is ' + (a % 2 == 0 ? 'even' : 'odd')); // 30 is even
console.log(b + ' is ' + (b % 2 == 0 ? 'even' : 'odd')); // 939 is odd
console.log(c + ' is ' + (c % 2 == 0 ? 'even' : 'odd')); // 40.9 is odd