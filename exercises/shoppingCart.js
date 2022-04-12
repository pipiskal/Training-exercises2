// ----------------- The sollution is not optimal it runs at On2

// can be improved if i remove the getProductByName and instead map on products and get the product.name;

const products = [
  { name: "apple", price: 12, discountAt: 2 },
  { name: "orange", price: 32, discountAt: 3 },
  { name: "pen", price: 22, discountAt: 2 },
  { name: "notebook", price: 89, discountAt: 2 },
  { name: "peach", price: 18, discountAt: 2 },
];

// u can add any item in the cart and it should work even if its not in the database
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
  "pen",
  "banana",
  "xtapodi",
];

// getting a product from the list by name
const getProductByName = (listOfProducts, name) => {
  const product = listOfProducts.reduce((acc, cur, index) => {
    if (cur.name === name) {
      return listOfProducts[index];
    } else {
      // returns an empty object
      return acc;
    }
  }, {});

  return product;
};

// Getting the total Price of all Items
const originalPrice = boughtProducts.reduce((totalPrice, productName) => {
  const product = getProductByName(products, productName);
  return Object.keys(product).length === 0
    ? totalPrice
    : totalPrice + product.price;

  //   return totalPrice + product.price;
}, 0);

// 1. Get a unique set of the items from the bought Products list
// using set to take the unique items and converting them back to array so i can use methods
const uniqueProducts = [...new Set(boughtProducts)];

// 2. find how many times an element appears in an array.
const getOccurrence = (array, value) => {
  return array.filter((item) => item === value).length;
};

// 3. getting an array of objects will all the products their occurencies and their price
const productsGroupedByName = uniqueProducts
  .filter((productName) => {
    const product = getProductByName(products, productName);
    if (Object.keys(product).length) {
      return product;
    }
  })
  .map((productName) => {
    const newObj = {};
    const occurrences = getOccurrence(boughtProducts, productName);
    const product = getProductByName(products, productName);
    if (product) {
      newObj.name = productName;
      newObj.occurrences = occurrences;
      newObj.price = product?.price;
      newObj.discountAt = product?.discountAt;
    }

    return newObj;
  });

// 4. Calculate the Discounted Price for all the products

const totalDiscountedPrice = productsGroupedByName.reduce(
  (totalPrice, product) => {
    return (
      totalPrice +
      Math.floor(product.occurrences / product.discount) * product.price
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
