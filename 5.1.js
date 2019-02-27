// Enables readline-sync
const readlineSync = require("readline-sync");

// Function to create tv series object
function askTvSerie (name, productionY, castMember) {
    // Object to store data to
    tvSerie = {
        name: name,
        productionY: productionY,
        castMember: castMember
    };

    // Asks for data to store in assigned variables
    tvSerie.name = readlineSync.question("Please enter name of tv series. ");
    tvSerie.productionY = readlineSync.question("Please enter production year of tv series. ");
    // Will store output in one string
    tvSerie.castMember = readlineSync.question("Please enter cast members of tv series. Seperate several cast members with a comma. ");

    // Will split the string in several array elements on every comma
    tvSerie.castMember = tvSerie.castMember.split(',');

    // Will return the created object in JSON format
    return JSON.stringify(tvSerie, null, "     ");
}

// Calls and prints the result of askTvSerie() to the console
console.log(askTvSerie());