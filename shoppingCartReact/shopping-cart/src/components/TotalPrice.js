const TotalPrice = ({ totalPrice }) => {
  return (
    <div className="total-price">
      <small>Total Price ---------👉 </small>
      <small className="price"> Price : {totalPrice} </small>
    </div>
  );
};

export default TotalPrice;
