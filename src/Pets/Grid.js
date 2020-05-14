import React, { useState, useEffect } from "react";
import GridItem from "./GridItem";
import pf from "../Api.js";

const Grid = () => {
  const [pets, updatePets] = useState([]);

  useEffect(() => {
    pf.animal.search().then(response => {
      updatePets(response.data.animals);
    });
  }, [pets.length]);

  return (
    <div className="container animals-grid">
      <div className="grid-boxes">
        {pets.length > 0 &&
          pets.map(animal => {
            return <GridItem animal={animal} key={animal.id} />;
          })}
      </div>
    </div>
  );
};

export default Grid;
