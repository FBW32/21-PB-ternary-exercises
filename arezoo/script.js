let pet = "isDog";
let result1 = pet == "isDog" ? "pat,pat" : "find me a dog to pat!";
console.log(result1);

//2

let mySpeed = 80;
let speedLimit = 50;
let speedCheck =
  mySpeed > speedLimit
    ? " you are going too fast"
    : mySpeed < speedLimit
    ? "you are diriving below the speed limit , oma"
    : "good driver";
console.log(speedCheck);

//3
let age = 69;
let msg = age < 16 ? "aerve butter beer" : "serve beer";
console.log(msg);

//4
let isStudent = true;
let msg1 = isStudent == true ? "Ticket costs €5,00" : "Ticket costs €12,00";
console.log(msg1);

//5
let okMarie = "cake";
let msg5 = okMarie == "cake" ? "eat cake" : "oh bother";
console.log(msg5);

//6
let number1 = 30;
let number2 = 939;
let number3 = 40.9;

let resultNumber1 =
  number1 % 2 == 0 ? `${number1} is even` : `${number1} is odd`;
console.log(resultNumber1);
let resultNumber2 =
  number2 % 2 == 0 ? `${number2} is even` : `${number2} is odd`;
console.log(resultNumber2);
let resultNumber3 =
  number3 % 2 == 0 ? `${number3} is even` : `${number3} is odd`;
console.log(resultNumber3);
