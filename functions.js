const getProductsOfNormalQuality = (pArray) => {
  let result = pArray.filter((obj) => obj.quality == "Normal");
  return result;
};

const getProductImageWithPngExtension = (pArray) => {
  let result = pArray.filter((obj) => obj.productImage.slice(-3) == "png");
  return result;
};

const getCalorieOfTheMostExpensiveProduct = (pArray) => {
  let maxPrice = Math.max(...pArray.map((obj) => obj.price));
  let result = pArray
    .filter((obj) => obj.price == maxPrice)
    .map((obj) => obj.totalCalories)[0];
  return result;
};

const sortByExpirationDate = (pArray) => {
  let result = pArray.sort(
    (a, b) => a.expireDate.getTime() - b.expireDate.getTime()
  );
  return result;
};

export {
  getProductsOfNormalQuality,
  getProductImageWithPngExtension,
  getCalorieOfTheMostExpensiveProduct,
  sortByExpirationDate,
};
