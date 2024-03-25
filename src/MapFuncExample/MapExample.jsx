import React, { useState } from "react";
import { Data } from "../Mapdata";
const MapExample = () => {
  return (
    <>
      {Data.map((response) => (
        <div key={response.id}>
          <h1>{response.name}</h1>
          <h2>{response.title}</h2>
        </div>
      ))}
    </>
  );
};
export default MapExample;
