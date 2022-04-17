/* 

Write a program to calculate the total price of a basket of shopping.*
 *The Price List is the following:*

 *apple costs 12 cents*
*orange costs 32 cents*
 pen: 22 cents
notebook: 89 cents
peach: 18 cents

Assuming that you did an API call and fetched all the products
and their prices, modify your current code to be able to calculate
the price of any basket.
For example, the following basket: apple, pen, peach, apple, pen, peach
,notebook, notebook, orange 


 *- The supermarket has special offers*
 *if you buy 2 apples you get 1 of them free*
 *if you buy 3 oranges you get 1 of them free*
 
 *apple, apple, orange, apple, orange, orange, apple, apple*
 */

// sta 10 dono ta 4 doro

/*

// We have defined a discount only for the apples and the oranges
const products = [
  { name: "apple", price: 12, discountAt: 2 },
  { name: "orange", price: 32, discountAt: 3 },
  { name: "pen", price: 22, discountAt: 2 },
  { name: "notebook", price: 89, discountAt: 2 },
  { name: "peach", price: 18, discountAt: 2 },
];

const boughtProducts = [
  "apple",
  "apple",
  // "orange",
  // "apple",
  // "orange",
  "orange",
  "orange",
  "orange",
  // "orange",
  // "orange",
  // "apple",
  // "pen",
];

*/

// convert to find -------

// needs the list of products and the name of the product you are looking for
const getProductByName = (listOfProducts, name) => {
  const product = listOfProducts.reduce((acc, cur, index) => {
    if (cur.name === name) {
      return listOfProducts[index];
    } else {
      return acc;
    }
  }, {});

  return product;
};

// 1st Way

/*


const calculatePrice = (listOfProducts, boughtProducts) => {
  let appleCounter = 0;
  let orangeCounter = 0;

  // we will start by finding the price for all the bought products
  const finalPriceWithDiscount = boughtProducts.reduce((acc, cur) => {
    if (cur === "apple" && appleCounter < 1) {
      appleCounter += 1;
    } else if (cur === "apple" && appleCounter === 1) {
      appleCounter = 0;
      acc -= 12;
    }

    if (cur === "orange" && orangeCounter < 2) {
      orangeCounter += 1;
    } else if (cur === "orange" && orangeCounter === 2) {
      orangeCounter = 0;
      acc -= 32;
    }

    const product = getProductByName(listOfProducts, cur);
    // this is the total price and its correct
    return (acc += product.price);
  }, 0);
  return finalPriceWithDiscount;
};

console.log(calculatePrice(products, boughtProducts));

*/

// --------------------------------------------------------------------------------------------

// 2nd way

/*
const getPriceWithDiscount = (products, boughtProducts) => {
  let orangeCounter = 0;
  let appleCounter = 0;
  let allProductsPrice = 0;
  // we need to see how many apples and oranges the customer bought in total;
  const { applesBought, orangesBought, totalPrice } = boughtProducts.reduce(
    (accumulator, cur) => {
      if (cur === "apple") {
        appleCounter += 1;
      } else if (cur === "orange") {
        orangeCounter += 1;
      }
      const product = getProductByName(products, cur);
      // console.log(product.price);
      allProductsPrice += product.price;

      return {
        applesBought: appleCounter,
        orangesBought: orangeCounter,
        totalPrice: allProductsPrice,
      };
    },
    {}
  );
  // getting the total discount
  const totalDiscount =
    Math.floor(applesBought / 2) * 12 + Math.floor(orangesBought / 3) * 32;

  console.log(`Total Price : ${totalPrice}`);
  console.log(`Discount : ${totalDiscount}`);

  return totalPrice - totalDiscount;
};

const finalPriceWithDiscounts = getPriceWithDiscount(products, boughtProducts);

console.log(`Final Price : ${finalPriceWithDiscounts}`);

*/

/*

// 3rd way More generic

// Getting the total Price of all Items
const originalPrice = boughtProducts.reduce((totalPrice, productName) => {
  const product = getProductByName(products, productName);
  return totalPrice + product.price;
}, 0);

// 1. Get a unique set of the items from the bought Products list
// using set to take the unique items and converting them back to array so i can use methods
const uniqueProducts = [...new Set(boughtProducts)];

// 2. find how many times an element appears in an array.
const getOccurrence = (array, value) => {
  return array.filter((item) => item === value).length;
};

// convert to single return with a new { here the variables}

const productsGroupedByName = uniqueProducts.map((productName) => {
  const newObj = {};
  const occurrences = getOccurrence(boughtProducts, productName);
  const product = getProductByName(products, productName);
  newObj.name = productName;
  newObj.occurrences = occurrences;
  newObj.price = product.price;
  newObj.discountAt = product.discountAt;

  return newObj;
});

// 3. Calculate the Discounted Price for all the products

const totalDiscountedPrice = productsGroupedByName.reduce(
  (totalPrice, product) => {
    return (
      totalPrice +
      Math.floor(product.occurrences / product.discountAt) * product.price
    );
  },
  0
);

console.log(`The Total Price Without discounts is : ${originalPrice}`);
console.log(`Total Discounts are : ${totalDiscountedPrice}`);
console.log(
  `The Final price to pay after discounts is : ${
    originalPrice - totalDiscountedPrice
  }`
);

*/

// 2nd sollution calculate the price on order --- on item inserted

// 4th Way even more Generic

// sta 10 dono ta 4 doro

const products = [
  { name: "apple", price: 12, discount: { at: 2, free: 1 } },
  { name: "orange", price: 32, discount: { at: 2, free: 1 } },
  { name: "pen", price: 22 },
  { name: "notebook", price: 89 },
  { name: "peach", price: 18 },
];

const boughtProducts = [
  "apple",
  "apple",
  "orange",
  "apple",
  "orange",
  "orange",
  "orange",
  "orange",
  "orange",
  "orange",
  "apple",
  "pen",
];

// Getting the total Price of all Items
const originalPrice = boughtProducts.reduce((totalPrice, productName) => {
  const product = getProductByName(products, productName);
  return totalPrice + product.price;
}, 0);

// 1. Get a unique set of the items from the bought Products list
// using set to take the unique items and converting them back to array so i can use methods
const uniqueProducts = [...new Set(boughtProducts)];

// 2. find how many times an element appears in an array.
const getOccurrence = (array, value) => {
  return array.filter((item) => item === value).length;
};

// convert to single return with a new { here the variables}

const productsGroupedByName = uniqueProducts.map((productName) => {
  const newObj = {};
  const occurrences = getOccurrence(boughtProducts, productName);
  const product = getProductByName(products, productName);
  newObj.name = productName;
  newObj.occurrences = occurrences;
  newObj.price = product.price;
  newObj.discount = product.discount;

  return newObj;
});

// 3. Calculate the Discounted Price for all the products

const totalPricetoPay = productsGroupedByName.reduce((totalPrice, product) => {
  if (product.discount) {
    return (
      totalPrice +
      Math.floor(product.occurrences / product.discount?.at) *
        product.discount?.free *
        product.price
    );
  } else {
    return totalPrice + Math.floor(product.occurrences * product.price);
  }
}, 0);

console.log(`The Total Price Without discounts is : ${originalPrice}`);
console.log(`Total Discounts are : ${totalPricetoPay}`);
console.log(
  `The Final price to pay after discounts is : ${
    originalPrice - totalPricetoPay
  }`
);
