const ProductCardComponent = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <h4 className="product-name">{product.name}</h4>
      <p className="product-price">{product.price}</p>
      <button
        className="product-button"
        onClick={(e) => {
          return addToCart(e, product);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCardComponent;
