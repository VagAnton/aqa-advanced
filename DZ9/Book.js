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
        if (typeof value !== "string" || !(value = value.trim())) {
            throw new Error("The name is invalid");            
        }
        this.#name = value;
    }

    get author() {
        return this.#author;
    }
    
    set author(value) {
        if (typeof value !== "string" || !(value = value.trim())) {
            throw new Error("Author name is invalid");
        }
        this.#author = value;
    }

    get year() {
        return this.#year;
    }
    
    set year(value) {
        if (typeof value !== "number" || value < 0) {
            throw new Error("Invalid year");
        }
        this.#year = value;
    }

    printInfo() {
        console.log(`The "${this.name}" book was written by ${this.author} on ${this.year}.`);
    }

    static oldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) {
            return null;
        }

        return books.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest;
        });
    }
}

