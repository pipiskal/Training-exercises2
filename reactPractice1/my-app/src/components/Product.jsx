import Button from "./Button";

const Product = ({ buttonText, product, addProductToCart }) => {
  return (
    <div className="product">
      <label htmlFor="name">Name </label>
      <p className="product-name">{product.name}</p>
      <label htmlFor="family">Family </label>
      <p className="product-family">{product.family}</p>
      <small className="product-price">
        <strong>Price : </strong> <strong>{product.price}</strong>
      </small>
      <Button
        buttonText={buttonText}
        addProductToCart={addProductToCart}
        product={product}
      />
    </div>
  );
};

export default Product;
