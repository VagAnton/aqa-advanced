const decades = [10, 20, 30, 40, 50];
const sumDecades = decades.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumDecades);