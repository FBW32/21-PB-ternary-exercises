// 24.08.2020
//EXERCISE 1
//Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

let pet = "isDog";
console.log((pet === "isDog") ? "pat, pat" : "find me a dog to pat!");

// EXERCISE 2
// Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.

let speedCheck = 70;
let speedLimit = ('speedLimit' < 50 ) ? `you're going too fast!` : `You are driving below the speed limit, Oma!`;
console.log(speedLimit);

// EXERCISE 3
//  Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".

let age = 20;
let ageLimit = ('ageLimit' > 16) ? `serve butter beer` : `serve beer`;
console.log(ageLimit);

// EXERCISE 4
// Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".

let name = 'isStudent';
console.log((name === 'isStudent') ? `Ticket costs €5,00` : `Ticket costs €12,00`);


// EXERCISE 5 
// Declare a variable named okMarie. Check if there is 'cake' - 
// if so, print "Let them eat cake". If not, print "Oh, bother".


let okMarie = 'baker';
let cake;
console.log((okMarie === cake) ? 'Let them eat cake' : 'Oh, bother');
