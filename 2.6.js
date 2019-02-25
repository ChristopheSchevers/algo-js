const readlineSync = require("readline-sync");

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let input = parseInt(readlineSync.question("Please enter a number between 1 and 7. "));
console.log(`You chose ${days[input-1]}.`);