"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  } else {
    let x = (-b + Math.sqrt(d)) / (2 * a);
    arr.push(x);
    x = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let mistake;

  if (isNaN(percent)) {
    mistake = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    return mistake;
  } else if (isNaN(contribution)) {
    mistake = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    return mistake;
  } else if (isNaN(amount)) {
    mistake = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    return mistake;
  } else {
    let creditBody = amount - contribution;

    let start = new Date();

    let diff =
      date.getMonth() -
      start.getMonth() +
      12 * (date.getFullYear() - start.getFullYear());

    let P = ((1 / 12) * percent) / 100;
    let monthlyPayment = creditBody * (P + P / ((1 + P) ** diff - 1));
    totalAmount = monthlyPayment * diff;

    console.log(totalAmount.toFixed(2));
    return +totalAmount.toFixed(2);
  }
}
