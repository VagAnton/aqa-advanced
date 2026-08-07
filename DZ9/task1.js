import {Book} from "./Book.js"
import {EBook} from "./EBook.js"

function createBook(callback) {
    try {
        return callback();
    } catch (error) {
        console.log(error.message);
        return null;
    }
}

const book1 = createBook(() => new Book("Bukvar", "Taras Shevchenko", 1861));
book1?.printInfo();

const book2 = createBook(() => new Book("Alice's Adventures in Wonderland", "Lewis Carroll", 1865));
book2?.printInfo();

const book3 = createBook(() => new Book("The Martian", "Andy Weir", 2011));
book3?.printInfo();

const book4 = createBook(() => new Book(159, "Andy Weir", 2011));
book4?.printInfo();

const eBook1 = createBook(() => new EBook("The Last Wish", "Andrzej Sapkowski", 1993, ".pdf"));
eBook1?.printInfo();

if (eBook1) {
    eBook1.format = ".epub";
    eBook1.year = 1994;

    console.log(eBook1.format);
    console.log(eBook1.year);

    eBook1.printInfo();
}

const books = [book1, book2, book3, eBook1].filter(Boolean);

const oldestBook = Book.oldestBook(books);

console.log("\nOldest book:");
oldestBook.printInfo();

const eBook2 = createBook(() => EBook.fromBook(book2, ".epub"));

console.log("\nEBook created from Book:");
eBook2?.printInfo();