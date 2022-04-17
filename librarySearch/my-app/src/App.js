import "./styles.css";
import Search from "./components/Search";
import BookTitles from "./components/BookTitles";
import SelectToSortBy from "./components/SelectToSortBy";
import { useState, useEffect } from "react";

const url = `https://hn.algolia.com/api/v1/search?query=`;
// array of options, the selected option , listOfItems -> books in our case

function App() {
  const [books, setBooks] = useState([]);
  const [option, setOption] = useState("relevant");

  useEffect(() => {
    console.log(`From the useEffect ---- The option is : ${(option, books)}`);
    if (option === "relevant") {
      const filteredBooksByRelevancy = books.sort(
        (a, b) => b?.relevancy_score - a?.relevancy_score
      );
      setBooks(filteredBooksByRelevancy);
    }
    if (option === "points") {
      const filteredBooksByPoints = books.sort((a, b) => b?.points - a?.points);
      setBooks(filteredBooksByPoints);
    }
  }, [option]);

  const gettingData = async (e) => {
    e.preventDefault();
    // const selectElement = document.querySelector(".options");
    // const selectedOption = selectElement.value;

    // getting the passed value from the input;
    const searchedValue = e.target.querySelector("input").value;
    const response = await fetch(url + searchedValue);
    const { hits: data } = await response.json();

    // Formating Data;  // to get only books that has a title
    // and only the values that we are interested
    const dataSet = data.filter((book) => {
      if (book.title) {
        const { relevancy_score: relevant, points, title } = book;
        return { title, relevant, points };
      }
    });

    // -----------------------------can do the same with state ------------------------------

    // // default sorting by relevancy when user is searching for something
    const filteredDataByRelevancy = dataSet.sort((a, b) => {
      return b?.relevancy_score - a?.relevancy_score;
    });

    // searching by default with relevancy but search by points if user has the option to points on the next search
    // const filteredDataSet = booksByOption(selectedOption, dataSet);
    // console.log(filteredDataSet);

    // Setting the books by using the Hook method SetBooks to
    //  send the data to the component to render
    console.log(` the state is : ${option}`);
    setBooks(filteredDataByRelevancy);
  };

  return (
    <div className="App">
      <Search gettingData={gettingData} />
      <SelectToSortBy setOption={setOption} />
      <BookTitles books={books} />
    </div>
  );
}

export default App;
