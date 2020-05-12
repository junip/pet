import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Pet from "./Pet";
import petfinder from "./Api";

import pet, { ANIMALS } from "@frontendmasters/pet";

function RandomPet() {
  const [pets, updatePets] = useState([]);

  function updatePetsData(pets_params) {
    updatePets(pets_params);
  }

  async function requestPets() {
    /*eslint no-debugger: "error"*/
    let location = "Seattle, WA", breed = 'Akita', animal = 'dog';
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });
    console.log("animals", animals);
  
    updatePets(animals || []);
  }

  useEffect(() => {
    requestPets();
  }, [pets.length]);

  return (
    <div>
      <Grid container spacing={24}>
        {pets.length > 0 && pets.map(animal => {
          let breed;
          // breed may be one or two also
          breed = animal.breeds.primary
          return (
            <Pet
              key={animal.id}
              animal={animal.animal}
              name={animal.name}
              breed={breed}
              media={animal.photos}
              description={animal.description}
              location={`${animal.contact.city}, ${animal.contact.state}`}
            />
          );
        })}
      </Grid>
    </div>
  );
}

export default RandomPet;
