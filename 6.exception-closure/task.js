function parseCount(numberofGoods) {
  const intNumberofGoods = parseInt(numberofGoods, 10);
  if (isNaN(intNumberofGoods) || intNumberofGoods < 0) {
    throw new Error("Невалидное значение");
  }
  //console.log(intNumberofGoods);
  return intNumberofGoods;
}
function validateCount(numberofGoods) {
  try {
    return parseCount(numberofGoods);
    console.log(intNumberofGoods);
  } catch (Error) {
    return Error;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
  getPerimeter() {
    const perimeter = this.a + this.b + this.c;
    return perimeter;
  }
  getArea() {
    const p = this.getPerimeter() / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return +area.toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    const trinagle1 = new Triangle(a, b, c);
    const area1 = trinagle1.getArea();
    const perimeter1 = trinagle1.getPerimeter();
    console.log(area1);
    console.log(perimeter1);
    return trinagle1;
  } catch {
    return {
      getArea() {
        return "Ошибка! Треугольник не существует";
      },
      getPerimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
}
