import "./index.css";
import { useState, useEffect } from "react";
import ProductCardComponent from "./components/ProductCardComponent";
import ShoppingCartComponent from "./components/ShoppingCartComponent";
import TotalPrice from "./components/TotalPrice";
import SearchProductForm from "./components/SearchProductForm";

const products = [
  { name: "apple", price: 12, discountAt: 2 },
  { name: "orange", price: 32, discountAt: 3 },
  { name: "pen", price: 2 },
  { name: "notebook", price: 7 },
  { name: "peach", price: 4 },
  { name: "lemon", price: 3 },
  { name: "pinnaple", price: 8 },
  { name: "ball", price: 10 },
  { name: "perncil", price: 1 },
  { name: "laptop", price: 1000 },
];

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productsList, setProductsList] = useState(products);
  const [searchedValue, setSearchedValue] = useState("");

  // Every time the shopping cart changes calcultes automatically the Total price
  useEffect(() => {
    const finalPriceWithDiscount = getPriceWithDiscount(products, shoppingCart);
    setTotalPrice(finalPriceWithDiscount);
  }, [shoppingCart]);

  // creating a product card component for each product in the shopping cart
  const getProductsCards = () => {
    return productsList.map((product) => {
      return <ProductCardComponent product={product} addToCart={addToCart} />;
    });
  };
  // creating a product card component filtered by name
  const getProductsCardsFilteredByName = () => {
    return productsList
      .filter((product) => {
        return product.name === searchedValue;
      })
      .map((product) => {
        return <ProductCardComponent product={product} addToCart={addToCart} />;
      });
  };

  // adding products to shopping cart each time the button is clicked
  const addToCart = (e, product) => {
    setShoppingCart([...shoppingCart, product]);
  };

  // returns a product depending on its name used to automate the discounts
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

  // sets the searched Value to a string the user provided in the input element
  const searchedProduct = (e, listOfProducts, name) => {
    e.preventDefault();
    console.log(`the searched product is : ${name}`);

    if (name) {
      const product = listOfProducts.reduce((acc, cur, index) => {
        if (cur.name.toLowerCase() === name.toLowerCase()) {
          return listOfProducts[index];
        } else {
          return acc;
        }
      }, {});

      // -1 means that the searched value doenst exists in the productList
      if (Object.keys(product).length === 0) {
        setSearchedValue(-1);
      } else {
        setSearchedValue(name.toLowerCase());
      }
    } else {
      setSearchedValue("");
    }
  };

  // logic that calculated the discounts --- can be improved by getting
  // an array instead of fixed discounts
  const getPriceWithDiscount = (products, shoppingCart) => {
    let appleCounter = 0;
    let orangeCounter = 0;

    // we will start by finding the price for all the bought products
    const finalPriceWithDiscount = shoppingCart.reduce((acc, cur) => {
      if (cur.name === "apple" && appleCounter < 1) {
        appleCounter += 1;
      } else if (cur.name === "apple" && appleCounter === 1) {
        appleCounter = 0;
        acc -= 12;
      }

      if (cur.name === "orange" && orangeCounter < 2) {
        orangeCounter += 1;
      } else if (cur.name === "orange" && orangeCounter === 2) {
        orangeCounter = 0;
        acc -= 32;
      }

      const product = getProductByName(products, cur.name);
      // this is the total price and its correct
      return (acc += product.price);
    }, 0);
    return finalPriceWithDiscount;
  };

  return (
    <div className="container">
      <div className="App">
        <div className="header">
          <h1>Welcome to my shopping cart!! Plz Buy whatever you need</h1>
          <h2>Special Discounts only for today!</h2>
          <h3>
            You Get 2 Apples you pay only 1 -- You Get 3 Oranges you pay only 2
          </h3>
          <h4>START SHOPPING NOW!!!!</h4>
        </div>
        {/* Search form with input to search for a product */}
        <div>
          <SearchProductForm
            products={products}
            searchedProduct={searchedProduct}
          />
        </div>

        {/* Product List to choose from and add to the shopping-cart */}
        <div className="product-list">
          {
            // if the searched value is === "" return all the products
            // otherwise the item or nothing
            searchedValue === ""
              ? getProductsCards()
              : getProductsCardsFilteredByName()
          }
        </div>

        {/* a Table with all the products in the shopping-cart */}
        <div className="shopping-cart">
          <ShoppingCartComponent shoppingCart={shoppingCart} />
        </div>

        {/* a div that shows the Total price of selected Products */}
        <TotalPrice totalPrice={totalPrice} />
      </div>

      {/* Inserted just to add some space */}
      <div className="footer"></div>
    </div>
  );
}

export default App;
