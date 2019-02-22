const readlineSync = require("readline-sync");

let userName = readlineSync.question('Please enter your first name.');
console.log(`Hello ${userName}`);