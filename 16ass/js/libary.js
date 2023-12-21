debugger;
const author1 = {
    name: "Author 1",
    id: "1",
};
const author2 = {
    name: "Author 2",
    id: "2",
};
const book1 = {
    name: "Book 1",
    authors: [author1],
    year: 2000,
};
const book2 = {
    name: "Book 2",
    authors: [author2],
    year: 2020,
};
const book3 = {
    name: "Book 3",
    authors: [author2, author1],
    year: 2010,
};
const library = {
    books: [book1, book2, book3],
    location: "Hanoi",
    name: "Library 1",
};
function printBook(book) {
    let authorStr = '';
    for (let i = 0; i < book.authors.length; i++) {
        const author = book.authors[i];
        authorStr += `${author.name}, `;
    }
    console.log(`Book name: ${book.name}, year: ${book.year}, authors: ${authorStr}`);
    // console.log(`Book name: ${book.name}, year: ${book.year}, authors: ${book.authors.map(authorStr=>authorStr.name).join(', ')}`);
}
function printLibrary(library) {
    for (let i = 0; i < library.books.length; i++) {
        const book = library.books[i];
        printBook(book);
    }
}
printLibrary(library);
//# sourceMappingURL=libary.js.map