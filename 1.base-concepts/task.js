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
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  if (isNaN(percent)|| (typeof percent === 'undefined') {
    alert(`Процентная ставка содержит неправильное значение ${percent}`);
  } else if (isNaN(contribution)|| (typeof contribution === 'undefined') {
    alert(`Процентная ставка содержит неправильное значение ${contribution}`);
  } else if (isNaN(amount)||(typeof amount === 'undefined') {
    alert(`Процентная ставка содержит неправильное значение ${amount}`);
  } else {
    let creditBody = amount - contribution;
    let start = Date.now();
    let elapsedTime = date - start;
    elapsedTime = elapsedTime / (1000 * 60 * 60 * 24 * 30);
    let P = ((1 / 12) * percent) / 100;
    let monthlyPayment = creditBody * (P + P / ((1 + P) ** elapsedTime - 1));
    totalAmount = monthlyPayment * elapsedTime;
    totalAmount = totalAmount.toFixed(2);

    return totalAmount;
  }
}
