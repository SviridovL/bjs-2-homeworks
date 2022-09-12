function Student(name, gender, age) {
  // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}
//const Student1 = new Student("Vova", "male", 35);
//const Student2 = new Student("Sveta", "female", 45);
//const Student3 = new Student("Leva", "male", 52);
//const Student4 = new Student("Dasha", "female", 23);

Student.prototype.setSubject = function (subject) {
  this.subject = subject;
};

//Student1.setSubject("algebra");
//Student2.setSubject("history");
//Student3.setSubject("medicine");
//Student4.setSubject("biology");
// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
};
Student.prototype.addMarks = function (...mark) {
  if (this.marks === undefined) {
    this.marks = mark;
  } else {
    this.marks.push(mark);
  }
};

Student.prototype.getAverage = function () {
  const average = this.marks.reduce((acc, item, idx, arr) => {
    if (idx === this.marks.length - 1) {
      return (acc + item) / this.marks.length;
    } else {
      return acc + item;
    }
  });
  return (this.average = average);
};
Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
