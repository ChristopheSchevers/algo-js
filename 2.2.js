const readlineSync = require("readline-sync");

let min = Number(readlineSync.question("Please enter an minimum value. "));
let max = Number(readlineSync.question("Please enter an maximum value. "));

if (min > max) {
    console.log("Error: It appears you don't understand anything. Goodbye.");
} else {
    let current = Number(readlineSync.question("Please enter the current value. "));
    if ((current >= min) && (current <= max)) {
        console.log(`Current value is ${current}.`);
    } else {
        console.log("Current value is not situated between minimum and maximum value.");
    }    
} 