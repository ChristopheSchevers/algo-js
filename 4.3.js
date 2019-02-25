const readlineSync = require("readline-sync");

// Empty array to store results
let arr = [];

// Function that gives a random number from 1 to 10
function rand10() {
    return Math.floor((Math.random() * 10) + 1);
}

// Function that stores multiple results from rand10() with chosen iterations
function multiRand(n) {
    // Ask number of random numbers
    n = Number(readlineSync.question("How many random numbers do you need? "));

    // Run rand10() function given x times
    for (let i = 0; i < n; i++) {
        arr.push(rand10());
    }
    return arr
}

// Print result to console
console.log(multiRand());