let arr1 = [1, 2, 3, 4, 5];
let arr2 = [100, 101, 102];
let copyArray = [];

// first version (push-only)
/* Array.prototype.push.apply(copyArray, arr1); */

// second version
copyArray = arr2.slice();

console.log(arr2);
console.log(copyArray);