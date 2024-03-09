//here we will get pokemon json data using axios
import React, { useState, useEffect } from "react";
import axios from "axios";
const AxiosLib = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data);
      } catch (error) {
        console.log("error  fetching of the data", error);
      } finally {
        setIsLoading(true);
      }
    };
    dataFetch();
  }, []);
  return (
    //{isLoading ?():()}
    <>
      {isLoading ? (
        <ul>
          {data.map((info) => (
            <li key={info.id}>{info.title}</li>
          ))}
        </ul>
      ) : (
        <p> Data Loading...</p>
      )}
    </>
  );
};

export default AxiosLib;
