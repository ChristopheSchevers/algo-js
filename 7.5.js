let arr = [4,9,23,2,78,5,3,10];

// Function to sort arrays by number
function arraySort(array) {
    // Variable that stores function state
    let complete = false;

    // Loop that executes the function as long complete state is not true
    while (!complete) {
        // At beginning of loop complete state is set to true
        complete = true;
        // For loop which moves up the indexes of the given array
        for (i = 1; i < array.length; i++) {
            // If statement checks if previous item is greater than current item
            if (array[i - 1] > array[i]) {
                // If statement is true the complete state is set to false
                complete = false;
                // Temporary variable is set to previous item
                let temp = array[i - 1];
                // Previous item is set to current item
                array[i - 1] = array[i];
                // Current item is set to the temporary value
                array[i] = temp;
            }
        }
    }

    // returns the result of the function
    return array;
}

// Logs original array and the result of the function to the console
console.log(arr);
console.log(arraySort(arr));