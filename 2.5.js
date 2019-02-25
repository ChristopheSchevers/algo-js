const readlineSync = require("readline-sync");

let answer = 0;

answer = Number(readlineSync.question("What is your favorite number? "));
while (answer != 42) {
    console.log("Are your sure?");
    answer = Number(readlineSync.question("What is your favorite number? "));
}