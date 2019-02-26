const readlineSync = require("readline-sync");

let arr = [];

// Function to generate random number from 1 to 10
function rand10() {
    return Math.floor((Math.random() * 10) + 1);
}

// Function to run rand10() a chosen number of times and push them to global array
function multiRand(n) {
    n = Number(readlineSync.question("How many random numbers do you need? "));
    for (let i = 0; i < n; i++) {
        arr.push(rand10());
    }
    return arr
}

// Function to get average of global array
function average() {
    return arr.reduce((a, b) => a + b, 0)/arr.length;
}

// Function to get minimum value of global array
function min() {
    return Math.min(...arr);
}

// Function to get maximum value of global array
function max() {
    return Math.max(...arr);
}

// Print results to console
console.log(multiRand());
console.log(average());
console.log(min());
console.log(max());