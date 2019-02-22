const readlineSync = require("readline-sync");

let bYear= readlineSync.question("Please enter your birth year. ");
let shoeSize= readlineSync.question("Please enter your shoe size. ");

let resultOne = shoeSize * 2;
let resultTwo = resultOne + 5;
let resultThree = resultTwo * 50;
let finalResult = resultThree - bYear;
let epicResult = finalResult + 1766;

console.log(epicResult);