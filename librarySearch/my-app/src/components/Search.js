import React from "react";

const Search = ({ gettingData }) => {
  return (
    <form onSubmit={gettingData}>
      <h4> Welcome to my search book library</h4>
      <input type="text" placeholder="Search for your book"></input>
      <button>Search</button>
    </form>
  );
};

export default Search;
