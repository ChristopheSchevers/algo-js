const readlineSync = require("readline-sync");

let min = readlineSync.question("Please enter an minimum value. ");
let max = readlineSync.question("Please enter an maximum value. ");
let current = readlineSync.question("Please enter the current value. ");

if (min > max) {
    console.log("Error: It appears you don't understand anything. Goodbye.");
} else if ((current >= min) && (current <= max)) {
    console.log(`Current value is ${current}.`);
} else {
    console.log("Current value is not situated between minimum and maximum value.");
}