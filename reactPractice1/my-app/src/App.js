import "./index.css";
import React, { useState, useEffect } from "react";
import ProductsList from "./components/ProductsList";
import Search from "./components/Search";
import CheckoutList from "./components/CheckoutList";
import Discounts from "./components/Discounts";
import Filters from "./components/Filters";

const App = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [shoppingCart, setShoppingCart] = useState([]);
  const [familyFilters, setFamilyFilters] = useState({
    family: [],
    price: [],
  });

  // Using useEffect to run the fetch request only once
  // setting the returned data to products state variable with setProducts method
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://fruits-api.netlify.app/graphql`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
            {
              fruits {
                id
                fruit_name
                tree_name
                family
                origin
                description
                maturation_fruit
                life_cycle
                climatic_zone
            
              }
            }
          `,
          }),
        });
        const jsonResponse = await response.json();
        const data = jsonResponse.data.fruits;

        const formattedProducts = data.map((fruit) => {
          return {
            id: fruit.id,
            name: fruit.fruit_name,
            treeName: fruit.tree_name,
            origin: fruit.origin,
            family: fruit.family,
            lifeCycle: fruit.life_cycle,
            description: fruit.description,
            price: Math.floor(Math.random() * 30) + 1,
          };
        });

        setProducts(formattedProducts);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const addProductToCart = (product) => {
    setShoppingCart([...shoppingCart, product]);
  };

  const handleFilters = (filters, category) => {
    const newFilters = filters;

    console.log(newFilters);
  };

  return (
    <>
      <h1>Welcome to my site! Here you can explore Fruits and buy them </h1>
      <div className="functionality-bar">
        <Search button buttonText="Search" setSearchTerm={setSearchTerm} />
        {/* <Discounts /> */}
        <Search button buttonText="Search" setSearchTerm={setSearchTerm} />
      </div>

      <div className="container">
        <div className="filters">
          <Filters
            // we pass from the Filters components the array data and as a default we have
            // family as category
            handleFilters={(filters) => handleFilters(filters, "family")}
          />
        </div>
        <main className="main-screen">
          <ProductsList
            addProductToCart={addProductToCart}
            products={products.filter((product) =>
              product.name.toLowerCase().includes(searchTerm)
            )}
          />
        </main>
        <aside className="shopping-cart">
          <h1>------Shopping Cart-------</h1>
          <CheckoutList
            shoppingCart={shoppingCart}
            totalPrice={shoppingCart.reduce(
              (sum, product) => sum + product.price,
              0
            )}
          />
        </aside>
      </div>
    </>
  );
};

export default App;
