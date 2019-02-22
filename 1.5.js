const readlineSync = require('readline-sync');

let numberOne = readlineSync.question('Please enter first number with decimals');
let numberTwo = parseInt(readlineSync.question('Please enter second number with decimals'));

console.log(numberOne * numberTwo);