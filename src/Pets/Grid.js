import React, { useState, useEffect } from "react";
import GridItem from "./GridItem";
import pf from "../Api.js";
import Loader from "../Loader/Loader.js";

const Grid = () => {
  const [loading, setLoading] = useState(true);
  const [pets, updatePets] = useState([]);

  useEffect(() => {
    pf.animal.search({ type: "dog", breed: "akita" }).then(response => {
      updatePets(response.data.animals);
      setLoading(false);
    });
  }, [pets.length]);

  return (
    <>
      {loading ? (
        <div className="spinner">
          <Loader />
        </div>
      ) : (
        <div className="container animals-grid">
          <div className="grid-boxes">
            {pets.length > 0 &&
              pets.map((animal, i) => {
                return <GridItem cindex={i} animal={animal} key={animal.id} />;
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Grid;
