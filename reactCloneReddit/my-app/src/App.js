import { useState, useEffect } from "react";

import Card from "./components/Card";
import "./index.css";

const getCss = async () => {
  const spreadsheetId = "1Aw5rh7w1FAjfXn7dWmlbwCZ65CUZhoeChvhiD-F6jdg";
  const response = await fetch(
    `https://api.graphqlsheet.com/api/${spreadsheetId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: "046a8b060dc7e1bcc33c1f7ee9f67cb4b63482d6",
      },
      body: JSON.stringify({
        query: `
        {
          get (limit: 20) {
            ID
            Title
            image
          }
        }
      `,
      }),
    }
  );
  const responseJSON = await response.json();
  return responseJSON;
};

const tags = ["Top", "Near You", "Sports", "Aww"];

function App() {
  const [cssValues, setCssValues] = useState([]);

  // useEffect(async () => {
  //   const data = await getCss();
  //   setCssValues(data);
  // }, []);

  return (
    <div className="container">
      <Card tags={tags} />
    </div>
  );
}

export default App;
