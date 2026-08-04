import {Book} from "./Book.js"
import {EBook} from "./EBook.js"

const book1 = new Book("Bukvar", "Taras Shevchenko", 1861);
book1.printInfo();

const book2 = new Book("Alice's Adventures in Wonderland", "Lewis Carroll", 1865);
book2.printInfo();

const book3 = new Book("The Martian", "Andy Weir", 2011);
book3.printInfo();

const book4 = new Book(159, "Andy Weir", 2011);
book4.printInfo();

const eBook1 = new EBook("The Last Wish", "Andrzej Sapkowski", 1993, ".pdf");
eBook1.printInfo();

eBook1.format = ".epub";
eBook1.year = 1994;

console.log(eBook1.format);
console.log(eBook1.year);

eBook1.printInfo();