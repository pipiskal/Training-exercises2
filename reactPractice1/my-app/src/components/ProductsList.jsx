import Product from "./Product";

const ProductsList = ({ products, addProductToCart }) => {
  console.log(products);

  return (
    <div className="products-list">
      {products.map((product) => {
        return (
          <Product
            buttonText="Add To Cart"
            product={product}
            addProductToCart={addProductToCart}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
