// Enables readline-sync
const readlineSync = require("readline-sync");

// Variable to store random number from 1 to 100
let randomNum = Math.floor(Math.random() * 100) + 1;

// Prints the generated random number to console to test program
/* console.log(randomNum); */

// Variable to store user's input after question
let guesNum = readlineSync.question("Guess the number. ");

// While loop to repeat until guesNum is same as randomNum
while (guesNum !== randomNum) {
    if (guesNum < randomNum) {
        console.log("Too low");
        guesNum = readlineSync.question("Guess the number. ");
    } else if (guesNum > randomNum) {
        console.log("Too high");
        guesNum = readlineSync.question("Guess the number. ");
    } else {
        // Prints to console before exiting
        return console.log("Well quessed!");
    }
}