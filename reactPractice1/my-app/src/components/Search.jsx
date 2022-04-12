import Button from "./Button";

const Search = ({ buttonText, setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for"
        onChange={(e) => {
          e.preventDefault();
          setSearchTerm(e.target.value.toLowerCase());
        }}
      />
      <Button buttonText={buttonText} />
    </div>
  );
};

export default Search;
