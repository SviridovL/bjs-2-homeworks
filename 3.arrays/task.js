function compareArrays(arr1, arr2) {
  let result;
  console.log(arr1, arr2);
  if (arr1.length !== arr2.length) return (result = false);

  function isEqual(element) {
    return arr1[element] === arr2[element];
  }
  result = arr1.every(isEqual);

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код

  return resultArr; // array
}
