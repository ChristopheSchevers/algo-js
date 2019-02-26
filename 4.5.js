// Enables readline-sync node
const readlineSync = require("readline-sync");

// Function to calculate distance between 2 locations in 2 dimensions
function calcDistance (x1,x2,y1,y2) {
    // Questions to retrieve coordinates to calculate distance
    x1 = readlineSync.question("Please enter x-position of first location. ");
    y1 = readlineSync.question("Please enter y-position of first location. ");
    x2 = readlineSync.question("Please enter x-position of second location. ");
    y2 = readlineSync.question("Please enter y-position of second location. ");

    // Math.round() rounds the result to 2 decimals
    result = Math.round(Math.sqrt((x1 - x2)**2 + (y1 - y2)**2) * 100) / 100;
    return `Point A =[${x1}, ${y1}], point B = [${x2}, ${y2}] => ${result}`
}

// Calls function and prints result to console
console.log(calcDistance());