const car1 = {
    brand: "Audi",
    model: "Q7",
    year: 2024,
};

const car2 = {
    brand: "Opel",
    model: "TurboM",
    owner: "Jack",
};

const car3 = { 
    ...car1,
     ...car2 
    };
console.log(car3);