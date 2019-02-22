const readlineSync = require('readline-sync');

let dog = readlineSync.question("Please enter a dog name. (1 of 5) ");
let weirdVerb = readlineSync.question("Please enter a weird verb. (2 of 5) ");
let person = readlineSync.question("Please enter a name of a person. (3 of 5) ");
let oddPlace = readlineSync.question("Please enter an odd place to be. (4 of 5) ");
let randomWord = readlineSync.question("Please enter a random word. (5 of 5) ");

console.log(`Today ${dog} the cowardly dog was ${weirdVerb} with ${person} near the ${oddPlace} down the street. It was ${randomWord}.`)