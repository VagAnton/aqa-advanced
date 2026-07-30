const users = [
    { name: "Jake", email: "superwroker@gmail.com", age: 23 },
    { name: "Triss", email: "merigold@gmail.com", age: 65 },
    { name: "Garry", email: "g.osborn@gmail.com", age: 29 },
];

for (const person of users) {
    const { name, email, age } = person;
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Age: ${age}`);
    console.log("---------");
}