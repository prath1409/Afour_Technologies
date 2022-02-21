// Flyweight optimized version
class Book {
    constructor(title, author, genre, pageCount, publisherID, ISBN) {
          this.title = title;
          this.author = author;
          this.genre = genre;
          this.pageCount = pageCount;
          this.publisherID = publisherID;
          this.ISBN = ISBN;
    }
}



//  A Basic Factory

// Book Factory singleton
const existingBooks = {};

class BookFactory {
    constructor(title, author, genre, pageCount, publisherID, ISBN) {

        // Find out if a particular book meta-data combination has been created before
        // !! or (bang bang) forces a boolean to be returned
        this.existingBook = existingBooks[ISBN];
        if (!!this.existingBook) {
            return this.existingBook;
        } else {
            // if not, let's create a new instance of the book and store it
            const book = new Book(title, author, genre, pageCount, publisherID, ISBN);
            existingBooks[ISBN] = book;
            return book;

        }
    }
}



//  Managing the extrinsic states

// BookRecordManager singleton
const bookRecordDatabase = {};

class BookRecordManager {
    // add a new book into the library system
    constructor(id, title, author, genre, pageCount, publisherID, ISBN, checkoutDate, checkoutMember, dueReturnDate, availability) {
        this.book = new BookFactory(title, author, genre, pageCount, publisherID, ISBN);

        bookRecordDatabase[id] = {
            checkoutMember,
            checkoutDate,
            dueReturnDate,
            availability,
            book: this.book,
        };
    }

    updateCheckoutStatus(bookID, newStatus, checkoutDate, checkoutMember, newReturnDate) {

        const record = bookRecordDatabase[bookID];
        record.availability = newStatus;
        record.checkoutDate = checkoutDate;
        record.checkoutMember = checkoutMember;
        record.dueReturnDate = newReturnDate;
    }

    extendCheckoutPeriod(bookID, newReturnDate) {
        bookRecordDatabase[bookID].dueReturnDate = newReturnDate;
    }

    isPastDue(bookID) {
        const currentDate = new Date();
        return currentDate.getTime() > Date.parse(bookRecordDatabase[bookID].dueReturnDate);
    }
}