const Discounts = () => {
  return (
    <div className="discounts">
      <input type="text" placeholder="search product" />
      <p>Product name</p>
      <div className="discount-choice">
        <p>Set Discount</p>

        <input type="radio" id="huey" name="drone" value="huey" />
        <label for="huey">Huey</label>
        <input type="radio" id="huey" name="drone" value="huey" />
        <label for="huey">Huey</label>
        <input type="radio" id="huey" name="drone" value="huey" />
        <label for="huey">Huey</label>
        <button type="button">Set Discount</button>
      </div>
    </div>
  );
};

export default Discounts;
