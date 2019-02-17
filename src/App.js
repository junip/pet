import React from 'react';
import ReactDOM from 'react-dom';
import pf from 'petfinder-client';

import Pet from './Pet'

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
})
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    }
  }


  componentDidMount() {
    petfinder.pet.find({ output: "full", location: "Seattle, WA" })
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
        this.setState({
          pets: pets
        })
      })

  }



  render() {
    return (
      <div>
        {this.state.pets.map(animal => {
          let breed;
          // breed may be one or two also
          if (Array.isArray(animal.breeds.breed)) {
            breed = animal.breeds.breed.join(', ');
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
              location={`${animal.contact.city}, ${animal.contact.state}`}
            />
          )
        })}
      </div>
    )
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))
