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
