const Button = ({ buttonText, addProductToCart, product }) => {
  return (
    <button
      className="button"
      type="button"
      onClick={(e) => {
        addProductToCart(product);
      }}
    >
      {buttonText}
    </button>
  );
};

export default Button;
