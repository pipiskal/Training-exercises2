import React, { useState, useEffect } from "react";
import Body from "./components/body/Body";

const url = `https://hn.algolia.com/api/v1/search?query=`;

export type BookType = {
  title: string;
  relevancy_score: number;
  points: number;
  author: string;
};

// const sortByRelevance = (results: BookType[]) => {
//   return results.sort((a, b) => {
//     if (a.relevancy_score === undefined) {
//       a.relevancy_score = 0;
//     }
//     if (b.relevancy_score === undefined) {
//       b.relevancy_score = 0;
//     }
//     return b.relevancy_score - a.relevancy_score;
//   });
// };

// const sortByPoints = (results: BookType[]) => {
//   return results.sort((a, b) => {
//     return b.points - a.points;
//   });
// };

const sortByOption = (option: string, results: BookType[]): BookType[] => {
  if (option === "relevant") {
    console.log("the option is relevant");
    return results.sort((a, b) => {
      if (a.relevancy_score === undefined) {
        a.relevancy_score = 0;
      }
      if (b.relevancy_score === undefined) {
        b.relevancy_score = 0;
      }
      return b.relevancy_score - a.relevancy_score;
    });
  } else if (option === "points") {
    console.log("the option is points");
    return results.sort((a, b) => {
      // console.log(`${b.points} - ${a.points}`);
      return b.points - a.points;
    });
  } else {
    return results;
  }
};

const App = (): JSX.Element => {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<BookType[]>([]);
  const [select, setSelect] = useState<string>("relevant");

  // fetching the data from the api
  const fetchApi = async () => {
    try {
      const response = await fetch(url + query);
      const { hits: data } = await response.json();

      // i dont want all this data i want to reformat the incoming array of objects
      const results: BookType[] = data.map((result: BookType) => {
        return {
          title: result.title,
          author: result.author,
          relevancy_score: result.relevancy_score,
          points: result.points,
        };
      });
      setData(results);
    } catch (error) {
      console.log(error);
    }
  };

  // Question to ask why this doenst work; the data that gets filtered

  // useEffect(() => {
  //   console.log("changed");
  //   console.log(select);
  //   const sortedData = sortByOption(select, data);
  //   console.log(sortedData);
  //   setData(sortedData);
  // }, [select]);

  console.log(data);

  return (
    <Body
      onClick={() => fetchApi()}
      onInputChange={(e) => setQuery(e.target.value)}
      onSelectChange={(e) => setSelect(e.target.value.toLowerCase())}
      data={sortByOption(select, data).filter(
        (book) => book.relevancy_score > 0
      )}
    />
  );
};

export default App;
