// 1. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

let isDog = (true) ? 'pat, pat' : 'find me a dog to pat!';

console.log(isDog);

// or

if (isDog === true) {
    console.log('pat, pat');
} else {
    console.log('find me a dog to pat!');
}; 

// 2. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.

let speedCheck = 45;
let speedlimit = 50;
console.log((speedCheck > speedlimit) ? "you're going too fast!" : "You're driving below the speed limit, Oma");

// 3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".

let age = 38;

console.log((age < 38) ? "serve butter beer" : "serve beer");


// 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".

let isStudent = true;
console.log((isStudent === true) ? "Ticket costs €5,00" : "Ticket costs €12,00");

// 5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother".

let okMarie = "okMarie";
let cake = true;
console.log((cake === true) ?  "Let them eat cake" : "Oh, bother");

// 6. Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.     30, 939, 40.9

let num1 = 30;
let num2 = 939;
let num3 = 40.9;

console.log((num1 % 2 === 0) ? "30 is even" : "30 is odd"); //  30 is even

console.log((num2 % 2 === 0) ? "939 is even" : "939 is odd"); // 939 is odd

console.log((num3 % 2 === 0) ? "40.9 is even" : "40.9 is odd"); //  40.9 is odd
