// Enable readline-sync node
const readlineSync = require("readline-sync");

// Function with 2 parameters
function calcSurface(length, width) {
    // Ask input for parameters
    length = Number(readlineSync.question("Please enter length of rectangle. "));
    width = Number(readlineSync.question("Please enter width of rectangle. "));

    // Formula for rectangle surface
    return length * width;
}

// Call function and log result to console
console.log(calcSurface());