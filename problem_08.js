const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const bigNumber = [...new Set(numbers)].reverse()[0];

console.log(bigNumber)