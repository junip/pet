import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Pet from "./Pet";
import petfinder from './Api';

function RandomPet() {
  const [pets, updatePets] = useState([]);

  function updatePetsData(pets_params) {
    updatePets(pets_params);
  }

  /** fetch data on using petfinder api */
  function fetchdata() {
    petfinder.pet
      .find({ output: "full", location: "Seattle, WA" })
      .then(data => {
        /**
         *  coming data from api may be single pet or array of pets
         *  so check is enabled to know if it is an array or single pet
         *  element, accordingly update the state
         */
        let pets;
        let petfinderData = data.petfinder.pets;
        if (petfinderData && petfinderData.pet) {
          if (Array.isArray(petfinderData.pet)) {
            pets = petfinderData.pet;
          } else {
            pets = [petfinderData.pet];
          }
        } else {
          pets = [];
        }
        updatePetsData(pets);
      });
  }
  //fetch data untill pets.lengths
  useEffect(() => {
    fetchdata();
  }, [pets.length]);

  return (
    <div>
      <Grid container spacing={24}>
        {pets.map(animal => {
          let breed;
          // breed may be one or two also
          if (Array.isArray(animal.breeds.breed)) {
            breed = animal.breeds.breed.join(", ");
          } else {
            breed = animal.breeds.breed;
          }
          return (
            <Pet
              key={animal.id}
              animal={animal.animal}
              name={animal.name}
              breed={breed}
              media={animal.media}
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
