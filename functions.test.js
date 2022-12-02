import { productList } from "./data.js";
import {
  getProductsOfNormalQuality,
  getProductImageWithPngExtension,
  getCalorieOfTheMostExpensiveProduct,
  sortByExpirationDate,
} from "./functions.js";

test("", () => {
  let result = getProductsOfNormalQuality(productList);
  expect(result.length).toBe(5);
});

test("", () => {
  let result = getProductsOfNormalQuality(productList);
  expect(result[1].productName).toBe("Waldbeeren");
});

test("", () => {
  let result = getProductImageWithPngExtension(productList);
  expect(result.length).toBe(3);
});

test("", () => {
  let result = getProductImageWithPngExtension(productList);
  expect(result[0].productImage).toBe(
    "https://image.migros.ch/product-zoom/7155c76b6f1134f6a57795ded7c1fb8c80953cf7/extra-konfituere-hagenbutten.png"
  );
});

test("", () => {
  let result = getCalorieOfTheMostExpensiveProduct(productList);
  expect(result).toBe(250);
});

test("", () => {
  let result = sortByExpirationDate(productList);
  expect(result[0].productName).toBe("Erdbeer Klein");
});

test("", () => {
  let result = sortByExpirationDate(productList);
  expect(result[result.length - 1].productName).toBe("Aprikosen");
});
