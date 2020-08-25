//1. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'

let isDog = "husky"
 console.log((isDog === "lion")? "pat , pat" : "find me a dog to pat!");
 // find me a dog to pat!

 // 2. Declare a variable named speedCheck. If speedLimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'.

let speedCheck = 35;
let speedLimit = 50;

console.log((speedCheck <= speedLimit)? "you're going too fast!" : "You're driving below the speed limit, Oma");
// you're going too fast!

//3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer".

let age = 25;
let verAge = 16;

console.log((age < verAge) ? "serve butter bear" : "serve beer");
//print 'you're going too fast!

// 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00".

let isStudent = "mary";  // serve beer

console.log((isStudent) ? "Ticket cost €5,00" : "Ticket costs €12,00");  
// Ticket cost €5


// 5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother". 

let okMarie = "cook";
let cake;

console.log((okMarie === cake)? "Let them eat cake" : "Oh, bother"); // oh , brother

// 6. Check if the following numbers are even numbers. Use a ternary and if the number is even print `30 is even`, else print that it is odd.
 let numIp = 30;

 console.log((numIp % 2 == 0)? `${numIp} is even` : `it is odd number` );
 // 30 is even