//1
let isDog = true;
let message =
  isDog == true ? console.log("pat,pat") : console.log("find me a dog to pat!");
//2
let speedLimit = 50;
let mySpeed = 70;
let speedCheck =
  speedLimit == 50 && mySpeed > speedLimit
    ? console.log("you a're going too fast!")
    : speedLimit == 50 && mySpeed < speedLimit
    ? console.log("You're driving below the speed limit, Oma")
    : console.log("Speed limit is " + speedLimit);
//3
let age = 18;
let servingBeer =
  age < 16 ? console.log("serve butter beer") : console.log("serve beer");
//4
let isStudent = true;
//P:S:if isStudent defined but different from true or false ticket must return €12 .Therefore istudent==true
let ticket =
  isStudent == true
    ? console.log("Ticket costs €5,00")
    : console.log("Ticket costs €12,00");
//5
let isThereCake = true;
let okMarie =
  isThereCake == true
    ? console.log("Let them eat cake")
    : console.log("Oh, bother");
//6

let num1 = 30;
let num2 = 939;
let num3 = 40.9;
let nums = [num1, num2, num3];
for (let i = 0; i <= 2; i++) {
  let isEven =
    nums[i] % 2 == 0
      ? console.log(nums[i] + " is even")
      : console.log(nums[i] + " is odd");
}
