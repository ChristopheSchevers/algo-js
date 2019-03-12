// Enables readline-sync
const readlineSync = require("readline-sync");

// Array to store pizza flavors
let flavs = [];

// Logs Welcome message to console at start of program
console.log("Hello! Welcome to the Pizza Flavors Manager.");

// Actual pizza flavor function
function pizzaFlavor() {
    // Logs menu to console after each action
    console.log("");
    console.log("Please choose your actions:");
    console.log("");
    console.log("1 - List all the pizza flavors");
    console.log("2 - Add a new pizza flavor");
    console.log("3 - Remove a pizza flavor");
    console.log("4 - Exit this program");
    console.log("");

    // Variable that stores menu option
    let x = Number(readlineSync.question("Enter your action's number: "));

    // Logs list of pizza flavors to console when menu option 1 is chosen and returns to menu
    if (x === 1) {
        console.log(flavs);
        pizzaFlavor();
    }

    // Enters do while loop to keep asking for new pizza flavor input
    if (x === 2) {
        // Do while loop breaks when "X" is entered and returns to menu
        do {
        flavs.push(readlineSync.question("Please enter pizza flavor. "));
        console.log("Enter X to return or press enter to add another pizza flavor.")
        } while (readlineSync.question() != "X")
        pizzaFlavor();
    }

    // Will remove array item when menu option 3 is chosen
    if (x === 3) {
        // Variable that stores array item to be removed
        let rm = readlineSync.question("Please enter pizza flavor number to remove. ");

        // If statement to check is input matches an item in array
        if (flavs.includes(rm)) {
            // If item exists the given item will be removed from the array and returns to menu
            flavs.splice(flavs.indexOf(rm), 1);
            pizzaFlavor();
        } else {
            // If item does not exist a message will be logged to console and returns to menu
            console.log(`Pizza flavors does not include ${rm}.`);
            pizzaFlavor();
        }

    }

    // If menu option 4 is chosen a message will be returned before exiting
    if (x === 4) {
        return console.log("Goodbye");
    }
}

// Function call to pizzaFlavor()
pizzaFlavor();