class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  set state(tempState) {
    if (tempState <= 0) {
      this._state = 0;
    } else if (tempState >= 100) {
      this._state = 100;
    } else {
      this._state = tempState;
    }
  }
  get state() {
    return this._state;
  }

  fix() {
    let tempState;
    this.state = this.state * 1.5;
    tempState = this.state;
    return tempState;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state, type);
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state, type);
    this.type = "book";
    this.author = author;
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = "novel";
    this.author = author;
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = "fantastic";
    this.author = author;
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = "detective";
    this.author = author;
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(printItem) {
    if (printItem.state > 30) {
      this.books.push(printItem);
    }
  }
  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        console.log(this.books[i]);
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    const requestedBook = this.findBookBy("name", bookName);
    const ind = this.books.indexOf(requestedBook);
    this.books.splice(ind, 1);
    console.log(this.books);
    return requestedBook;
  }
}

class Student {
  constructor(fullName) {
    this.name = fullName;
    this.subjects = [];
  }

  addMark(mark, subj) {
    let obj = { subject: subj, value: [mark] };
    if (mark > 5 || mark < 1) {
      return console.log(`Ошибка, оценка должна быть числом от 1 до 5`);
    } else {
      if (!this.subjects.find((item) => item.subject === subj)) {
        this.subjects.push(obj);
      } else {
        for (let i = 0; i < this.subjects.length; i++) {
          if (this.subjects[i].subject === subj) {
            this.subjects[i].value.push(mark);
          }
        }
      }
    }
  }

  addMarks(subj, ...mark) {
    let obj = { subject: subj, value: [mark] };
    // if (mark > 5 || mark < 1) {
    //   return console.log(`Ошибка, оценка должна быть числом от 1 до 5`);
    // } else {
    if (!this.subjects.find((item) => item.subject === subj)) {
      this.subjects.push(obj);
    } else {
      for (let i = 0; i < this.subjects.length; i++) {
        if (this.subjects[i].subject === subj) {
          mark.forEach((mark) => {
            if (mark > 5 || mark < 1) {
              return console.log(`Ошибка, оценка должна быть числом от 1 до 5`);
            } else {
              this.subjects[i].value.push(mark);
            }
          });
          console.log(this.subjects);
        }
      }
    }
  }

  getAverageBySubject(subj) {
    const index = this.subjects.findIndex((item) => item.subject === subj);
    if (index === -1) {
      return console.log(`Несуществующий предмет`);
    } else {
      const average = this.subjects[index].value.reduce(
        (acc, item, idx, arr) => {
          if (idx === this.subjects[index].value.length - 1) {
            return (acc + item) / this.subjects[index].value.length;
          } else {
            return acc + item;
          }
        }
      );
      console.log(`Средний балл по предмету  ${subj} ${average}`);
      return average;
    }
  }

  getAverage() {
    let numberElements = 0;
    let sum = 0;
    for (let i = 0; i < this.subjects.length; i++) {
      sum =
        sum +
        this.subjects[i].value.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue;
        });

      numberElements = this.subjects[i].value.length + numberElements;
    }
    let average = sum / numberElements;
    console.log(`Средний балл  ${average.toFixed(2)}`);
    return average.toFixed(2);
  }
}
