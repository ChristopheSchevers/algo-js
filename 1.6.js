const readlineSync = require('readline-sync');

let numberOne = readlineSync.question('Please enter first number. ');
let numberTwo = readlineSync.question('Please enter second number. ');

console.log(numberOne % numberTwo);