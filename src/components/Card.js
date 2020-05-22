import React from "react";

const Card = ({ name, age, hair_color, color }) => {
  return (
    <div style={{ backgroundColor: color }}>
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{hair_color}</p>
    </div>
  );
};

export default Card;
