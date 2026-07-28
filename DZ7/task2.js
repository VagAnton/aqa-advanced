const numbers = [1, 2, 3, 4, 5];
const multiNumbers = numbers.map((number) => number * numbers.indexOf(number));
console.log(multiNumbers);