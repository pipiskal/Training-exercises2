const ShoppingCartComponent = ({ shoppingCart }) => {
  return (
    <div className="shopping-cart">
      <table>
        <thead className="table-row">
          <tr>
            <th>Product Name</th>
          </tr>
          <tr>
            <th>Product Price</th>
          </tr>
          <tr>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {shoppingCart.map((product) => {
            return (
              <tr className="table-row">
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>delete - Add 1- Remove 1</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCartComponent;
