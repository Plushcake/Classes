class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    return state * 1.5;
  }
  set state(number) {
    if (number < 0) {
      number = 0;
    } else if (number > 100) {
      number = 100;
    }
    return number;
  }
  get state() {
    return this._state;
  }
}
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = magazine;
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = book;
    this.author = author;
  }
}
class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount) {
    this.type = novel;
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
  }
}
class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount) {
    this.type = fantastic;
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
  }
}
class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount) {
    this.type = detective;
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (state > 30);
    this.books.push(book);
  }
  findBookBy(type, value) {}
  giveBookByName(bookName) {}
}
