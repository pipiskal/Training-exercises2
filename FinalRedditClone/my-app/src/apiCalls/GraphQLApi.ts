export const getTags = async () => {
  const spreadsheetId = "13j-JRvErxCEw57y6_0QJ4sH4wpVh9xTcOy5Dabuy_5A";
  const response = await fetch(
    `https://api.graphqlsheet.com/api/${spreadsheetId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: "37255581eec8a9cdbfebccafeaf6c6aa0733a73c",
      },
      body: JSON.stringify({
        query: `
          {
            get(limit:20){
                name
              }
          }
        `,
      }),
    }
  );
  const responseJSON = await response.json();
  console.log(responseJSON);
  console.log(responseJSON.data.get);
  return responseJSON.data.get;
};

// because its an async function wit will return a promise;
export const getCommunities = async () => {
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
              rank,
              name,
              join,
              img 
            }
          }
        `,
      }),
    }
  );
  const responseJSON = await response.json();
  console.log(responseJSON);
  console.log(responseJSON.data.get);
  return responseJSON.data.get;
};
