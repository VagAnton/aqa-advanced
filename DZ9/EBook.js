import {Book} from "./Book.js"

export class EBook extends Book {
    #format
    constructor(name, author, year, format) {
        super(name, author, year);
        this.format = format;
    }

    get format() {
        return this.#format;
    }
    
    set format(value) {
        if (typeof value !== "string" || !(value = value.trim())) {
            throw new Error("The format is invalid");
        }
        this.#format = value;
    }
    printInfo() {
        console.log(`The "${this.name}" book was written by ${this.author} on ${this.year}. Can be downloaded in: ${this.format}`);
    }

    static fromBook(book, format) {
        if (!(book instanceof Book)) {
        throw new Error("Argument must be an instance of Book.");
    }
    
        return new EBook(
            book.name,
            book.author,
            book.year,
            format
        );
    }
}

