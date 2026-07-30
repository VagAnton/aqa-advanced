export class Book {
    #name
    #author
    #year
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }
    get name() {
        return this.#name;
    }
    
    set name(value) {
        if (typeof value !== "string") {
            console.log("The name is invalid");
            return;
        }
        this.#name = value;
    }

    get author() {
        return this.#author;
    }
    
    set author(value) {
        if (typeof value !== "string") {
            console.log("Author name is inalid");
            return;
        }
        this.#author = value;
    }

    get year() {
        return this.#year;
    }
    
    set year(value) {
        if (typeof value !== "number" || value < 0) {
            console.log("Invalid year");
            return;
        }
        this.#year = value;
    }

    printInfo() {
        console.log(`The "${this.name}" book was written by ${this.author} on ${this.year}.`);
    }
}


