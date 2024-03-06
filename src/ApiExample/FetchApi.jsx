import React, { useState, useEffect } from "react";
const FetchExample = () => {
  const [data, putData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        // console.log('fetched data',response);
        const jsonData = await response.json();
        // console.log('json Converted Data',jsonData)
        putData(jsonData);
      } catch (error) {
        console.log("error  fetching of the data", error);
      } finally {
        setIsLoading(true);
      }
    };
    FetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading....</p>
      )}
    </>
  );
};
export  default FetchExample;