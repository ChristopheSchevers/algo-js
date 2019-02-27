// Enables readline-sync
const readlineSync = require("readline-sync");

// Function to create tv series object
function askTvSerie (name, productionY, castMember) {    
    // Asks for data to store in assigned variables
    name = readlineSync.question("Please enter name of tv series. ");
    productionY = readlineSync.question("Please enter production year of tv series. ");
    // Will store output in one string
    inputCast = readlineSync.question("Please enter cast members of tv series. Seperate several cast members with a comma. ");
    
    // Will split the string in several array elements on every comma
    castMember = inputCast.split(',');
    
    // Object to store data to
    tvSerie = {
        name: name,
        productionY: productionY,
        castMember: castMember
    };

    // Will return the created object in JSON format
    return tvSerie;
}

// Calls and prints the result of askTvSerie() to the console
console.log(askTvSerie());