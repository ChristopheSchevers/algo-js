// Enables readline-sync
const readlineSync = require("readline-sync");

// Function to give n first fibonacci numbers
function fiboN (n) {
    // Basis fot fibonacci numbers array
    if (n === 1) {
        return [0, 1];
    } else {
        // Variable that stores given number minus 1, since we already have the first element of the array
        let s = fiboN (n - 1);
        // Pushes the result of the sum of the previous and the second previous element of the array
        s.push(s[s.length - 1] + s[s.length - 2]);
        // Returns the array
        return s;
    }
}

// Calls and enters integer input as parameter to function, prints result to console
console.log(fiboN(parseInt(readlineSync.question("Please enter a number. "))));