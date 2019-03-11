// Enables readline-sync
const readlineSync = require("readline-sync");

let results = [];

function diviStore (n) {
    if (n === 1 || n === 2) {
        return "Input number is a prime number and has no divisors.";
    } else {
        for (i = 2; i < n; i++) {
            if (n % i === 0) {
                results.push(i);
            }
        }
        if (results.length > 0) {
            return results;
        } else {
            return "Input number is a prime number and has no divisors.";
        }
    }
}

console.log(diviStore(Number(readlineSync.question("Please enter a positive number. "))));