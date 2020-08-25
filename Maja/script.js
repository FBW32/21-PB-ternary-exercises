/* 1. Declare a variable named isDog. If true, print 'pat, pat' and if not, print 'find me a dog to pat!'
 */
let dog = "dog";
let patting = "pat, pat";
let notpatting = "find me a dog to pat!";
let isDog = dog === "dog" ? patting : notpatting;
console.log(isDog); // pat, pat

/* 2. Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print 'you're going too fast!'. If speed is lower than 50km/h, print 'You're driving below the speed limit, Oma'. */

let mySpeed;
let speedlimit = 50;
let tooFast = `you're going too fast!`;
let tooSlow = `You're driving below the speed limit, Oma.`;

let speedCheck = mySpeed > speedlimit ? tooFast : tooSlow;
console.log(speedCheck); // You're driving below the speed limit, Oma.

/* 3. Declare a variable named age. If age is below 16, print "serve butter beer". Otherwise print "serve beer". */

let age;
let ageLess16 = "serve butter beer";
let ageAbove16 = "serve beer";
let ageLimit = 16;
let ageTest = age > ageLimit ? ageAbove16 : ageLess16;
console.log(ageTest); // serve butter beer

/* 4. Declare a variable named isStudent. If true, print "Ticket costs €5,00". If false, print "Ticket costs €12,00". */

let isStudent = "Student";
let Ticket5 = "Ticket costs €5,00";
let Ticket12 = "Ticket costs €12,00";
let TicketPrise = isStudent === "Student" ? Ticket5 : Ticket12;
console.log(TicketPrise); // Ticket costs €5,00

/* 5. Declare a variable named okMarie. Check if there is 'cake' - if so, print "Let them eat cake". If not, print "Oh, bother". */

let okMarie = "cake";
let letThem = "Let them eat cake";
let dontLetThem = "Oh, bother";
let CakeTest = okMarie === "cake" ? letThem : dontLetThem;
console.log(CakeTest); // Let them eat cake

/* 6. Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
30
939
40.9 */
let CheckNumber = 30 % 3 === 0 ? `30 is even` : `30 is odd`;
console.log(CheckNumber); // 30 is even

let CheckNumber2 = 939 % 3 === 0 ? `939 is even` : `939 is odd`;
console.log(CheckNumber2); // 939 is even

let CheckNumber3 = 40.9 % 3 === 0 ? `40.9 is even` : `40.9 is  odd`;
console.log(CheckNumber3); // 40.9 is odd
