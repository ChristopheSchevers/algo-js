let arr1 = [1, 2, 3, 4, 5];
let arr2 = [100, 101, 102];

console.log(arr1.reduce((a, b) => a + b, 0)/arr1.length);
console.log(arr2.reduce((a, b) => a + b, 0)/arr2.length);