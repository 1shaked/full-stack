interface Author {
    name: string;
    readonly id: string;
}

interface Book {
    name: string;
    authors: Author[];
    year: number;
}
debugger;
interface Library {
    books: Book[];
    location: string;
    name: string;
}

const author1: Author = {
    name: "Author 1",
    id: "1",
}
const author2: Author = {
    name: "Author 2",
    id: "2",
}

const book1: Book = {
    name: "Book 1",
    authors: [author1],
    year: 2000,
}

const book2: Book = {
    name: "Book 2",
    authors: [author2],
    year: 2020,
}


const book3: Book = {
    name: "Book 3",
    authors: [author2, author1],
    year: 2010,
}

const library: Library = {
    books: [book1, book2, book3],
    location: "Hanoi",
    name: "Library 1",
}

function printBook(book: Book): void {
    let authorStr: string = '';
    for (let i = 0; i < book.authors.length; i++) {
        const author = book.authors[i];
        authorStr += `${author.name}, `;
    }
    console.log(`Book name: ${book.name}, year: ${book.year}, authors: ${authorStr}`);
    // console.log(`Book name: ${book.name}, year: ${book.year}, authors: ${book.authors.map(authorStr=>authorStr.name).join(', ')}`);
}

function printLibrary(library: Library): void {
    for (let i = 0; i < library.books.length; i++) {
        const book = library.books[i];
        printBook(book);
    }
}

printLibrary(library);

