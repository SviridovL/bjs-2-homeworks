// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  // Ваш код
  min = arr[0];
  max = arr[0];
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum = sum + arr[i];
    avg = sum / arr.length;
    avg = +avg.toFixed(2);
  }

  console.log(arr);
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  max = func(arrOfArr[0]);
  for (let i = 1; i < arrOfArr.length; i++) {
    if (func(arrOfArr[i]) > max) {
      max = func(arrOfArr[i]);
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let max, min, diff;
  max = arr[0];
  min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  diff = Math.abs(max - min);
  return diff;
}
