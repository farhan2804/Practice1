import React, { useState, useEffect } from "react";
const FetchApi = () => {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log('fetched data',response);
        const jsonData = await response.json();
        console.log('json Converted Data',jsonData)
        setdata(jsonData);
      } catch (error) {
        console.log("error  fetching of the data", error);
      } finally {
        setIsLoading(true);
      }
    };

    fetchData();
  }, []);
  return (
    //{isLoading ?():()}
    <div>
      {isLoading ? (
        <ul>
          {data.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      ) : (
        <p> Loading....</p>
      )}
    </div>
  );
};

export default FetchApi;
