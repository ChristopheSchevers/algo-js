const readlineSync = require("readline-sync");

// Object to store data to
let tvSerie = {
    name: "",
    productionY: "",
    castMember: ""
};

// Function to create tv series object
function askTvSerie () {    
    // Asks for data to store in assigned variables
    tvSerie.name = readlineSync.question("Please enter name of tv series. ");
    tvSerie.productionY = readlineSync.question("Please enter production year of tv series. ");
    // Will store output in one string
    inputCast = readlineSync.question("Please enter cast members of tv series. Seperate several cast members with a comma. ");
    
    // Will split the string in several array elements on every comma
    tvSerie.castMember = inputCast.split(',');
    
    // Will return the created object in JSON format
    return tvSerie;
}

// Function to randomize the castMember array from askTvSerie()
function randomizeCast() {
    // Variable that makes all variables the current index of the array
    let currentIndex = tvSerie.castMember.length, temporaryValue, randomIndex;
    
    // While loop that will move down the indexes until it reaches 0
    while (0 !== currentIndex) {
        // Variable that generates a random integer based on the currentIndex
        randomIndex = Math.floor(Math.random() * currentIndex);
        // currentIndex will decrease by 1 with each iteration
        currentIndex -= 1;
        
        // Interlinking the variables to create a random flow
        temporaryValue = tvSerie.castMember[currentIndex];
        tvSerie.castMember[currentIndex] = tvSerie.castMember[randomIndex];
        tvSerie.castMember[randomIndex] = temporaryValue;
    }
    // Return the random result of castMember
    return tvSerie.castMember;
}

// Function to use random crew as crew for new tv series
function newCast () {
    // Questions for new name and productionY
    tvSerie.name = readlineSync.question("Please enter name for tv series with new cast. ");
    tvSerie.productionY = readlineSync.question("Please enter production year for tv series with new cast. ");
    // castMember will be set to the result of randomizeCast()
    tvSerie.castMember = randomizeCast();

    // Returns a new tvSerie object
    return tvSerie;
}

// Calls and prints the results to the console
console.log(askTvSerie());
console.log(newCast());