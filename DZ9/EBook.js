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
        if (typeof value !== "string") {
            console.log("The format is invalid");
            return;
        }
        this.#format = value;
    }
    printInfo() {
        console.log(`The "${this.name}" book was written by ${this.author} on ${this.year}. Can be downloaded in: ${this.format}`);
    }
}

