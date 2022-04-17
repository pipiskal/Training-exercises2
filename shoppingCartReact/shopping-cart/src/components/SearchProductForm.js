const SearchProductForm = ({ searchedProduct, products }) => {
  // onClick={(e) => {
  //     return addToCart(e, product);
  //   }}
  return (
    <form
      className="search-product-form"
      onSubmit={(e) => {
        const input = e.target.querySelector("input");
        return searchedProduct(
          e,
          products,
          input.value.toLowerCase() ? input.value.toLowerCase() : false
        );
      }}
    >
      <input type="text" placeholder="Search for Product" className="input" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchProductForm;
