const CheckoutList = ({ shoppingCart, totalPrice }) => {
  return (
    <div className="checkout-list">
      <div className="checkout-product-header">
        <div className="checkout-product-name">
          <h2>Name</h2>
        </div>

        <div className="checkout-product--price">
          <h2>Price</h2>
        </div>
      </div>

      <div className="checkout-products-list">
        {shoppingCart.map((product) => {
          return (
            <div className="checkout-product-name-price">
              <p>{` 🛒 ${product.name}`}</p>
              <p>{` 💲 ${product.price}`}</p>
            </div>
          );
        })}
      </div>

      <div className="checkout-total-price">
        <p>Total</p>
        <p>{totalPrice}</p>
      </div>
    </div>
  );
};

export default CheckoutList;
