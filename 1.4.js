const readlineSync = require('readline-sync');

let name = readlineSync.question("What's your last name?");
let firstName = readlineSync.question("What's your first name?");
let city = readlineSync.question("What city do you live in?");

console.log(`Hello ${firstName} ${name} who lives in ${city}.`);