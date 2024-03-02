import React from "react";
import { Data } from "../Mapdata";

const MapExample = () => {
  return (
    <>
      {Data.map((response) => (
        <div key={response.id}>
          <h1>{response.name}</h1>
          <li>{response.title}</li>
        </div>
      ))}
    </>
  );
};

export default MapExample;
