// Enables readline-sync to ask for input
const readlineSync = require("readline-sync");

// Function to calculate factorial
function factorialize(num) {
    // Asks number to calculate its factorial
    num = readlineSync.question("What number do you need factorialized? ");
    // Variable to store results from num variable
    let result = num;

    // If statement in case the input is 0 OR 1
    if (num == 0 || num == 1) {
        result = 1;
        return `The result is ${result}.`;
    }

    // While loop in cases where the input exceeds 1
    while (num > 1) {
        // Input is decreased by 1 with each iteration
        num--;
        // Result will multiply with modified num from input and will be stored as new result
        result *= num;
    }
    // Returns result output
    return `The result is ${result}.`;
}

// Calls function and prints result output to console
console.log(factorialize())