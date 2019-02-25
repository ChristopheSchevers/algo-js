const readlineSync = require("readline-sync");

let n = 0;
let sum = 0;
let nums = [];

n = readlineSync.question("Please enter a number. ");

// loop to retrieve data to add relevant to initial input of repetitions
for (i = 0; i < n; i++) {
    nums.push(Number(readlineSync.question("Please enter number to add. ")));
}

// loop to add array elements
for (i = 0; i < nums.length; i++) {
    sum += nums[i];
}

console.log(`The sum of your input is ${sum}.`);