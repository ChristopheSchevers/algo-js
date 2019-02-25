// Function
/* This function will return a random number between 1 and 10. First it will generate a number between 0 and 1 with random(). By multiplying it with 10 we make sure the options vary till 10. We need to add 1, otherwise the highest possible outcome would be 9. We need to floor the result to keep an integer. */
function rand10() {
    return Math.floor((Math.random() * 10) + 1);
}

console.log(rand10());