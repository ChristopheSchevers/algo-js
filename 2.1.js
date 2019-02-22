const readlineSync = require("readline-sync");

let adultTest = readlineSync.question("What is your age? ");

if (adultTest >= 18) {
    console.log("You are an adult.")
} else {
    console.log("You are not yet an adult.")
}