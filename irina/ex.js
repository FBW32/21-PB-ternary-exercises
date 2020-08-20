// # Programming Basics: Ternary

// These exercises are designed to make you more comfortable with the ternary operator. 

// 1. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'
let isDog
console.log((isDog) ? 'pat, pat': 'find me a dog to pat!'); //find me a dog to pat!

// 2. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.
 
let speedlimit = 50;
let speed;
//speed = 55;
let speedCheck = ((speed > speedlimit) ? "You're going too fast!" : "You're driving below the speed limit, Oma");
console.log(speedCheck);

// 3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".
let age = 18;
console.log((age < 16) ? "serve butter beer" : "serve beer");
// 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".
let isStudent = Boolean(true);
console.log((isStudent === Boolean(true)) ? "Ticket costs €5,00" : "Ticket costs €12,00");

// 5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother". 7
let cake = true;
let okMarie = ((cake) ? "Let them eat cake": "Oh, bother");
console.log(okMarie);

// 6. Check if the following numbers are even numbers. Use a ternary and if the number is even print `30 is even`, else print that it is odd.
// * 30
// * 939
// * 40.9
let num = 30;
 console.log((num % 2 === 0) ? `${num} is even ` : `${num} is odd`); //even
 num = 939;
 console.log((num % 2 === 0) ? `${num} is even ` : `${num} is odd`); //odd
 num = 40.9;
 console.log((num % 2 === 0) ? `${num} is even ` : `${num} is odd`); //odd

 //OR 

 if (num % 2 === 0) {
     console.log(`${num} is even`);
 }
 else {
     console.log(`${num} is odd`);
 }

