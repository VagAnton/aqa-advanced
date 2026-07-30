const person = {
    firstName: "John",
    lastName: "Johnson",
    age: 35,
};
person.email = "john.johnson@gmail.com";
delete person.age;
console.log(person);