import React from 'react';
import ReactDOM from 'react-dom';
import pf from 'petfinder-client';

import Pet from './Pet'
// const App = () => {
//     return (
//         React.createElement('div',{}, [
//             React.createElement('div', {}, 'ADOPT ME'),
//             React.createElement(Pet,{
//                 name: "Junip",
//                 email: "Hello@gmail.com",
//                 phonenumber: 9707190974
//             }),
//             React.createElement(Pet, {
//                 name: "Lune",
//                 email: "lunae@hotmail.com",
//                 phonenumber: 9707190974
//             }),
//             React.createElement(Pet, {
//                 name: "Daijee",
//                 email: "daijee@junip.com",
//                 phonenumber: 9707190974
//             })

//         ])
//     )
// }

// const Pet = () => {
//   return React.createElement("div", {}, [
//     // React.createElement("div", {}, props.name),
//     // React.createElement("div", {}, props.email),
//     // React.createElement("div", {}, props.phonenumber)
//   ])
// }

// class component for the same region
// class App extends React.Component {
//   render() {
//     return React.createElement("div", {}, [
//       React.createElement("div", {}, "ADOPT ME"),
//       // React.createElement(Pet, {
//       //   name: "Junip",
//       //   email: "Hello@gmail.com",
//       //   phonenumber: 9707190974
//       // }),
//       // React.createElement(Pet, {
//       //   name: "Lune",
//       //   email: "lunae@hotmail.com",
//       //   phonenumber: 9707190974
//       // }),
//       // React.createElement(Pet, {
//       //   name: "Daijee",
//       //   email: "daijee@junip.com",
//       //   phonenumber: 9707190974
//       // })
//     ]);
//   }
// }
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
    // const promise = petfinder.breed.list({
    //   animal: "dog"
    // })
    // promise.then(console.log, console.error)
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
        {/* <Pet name="junip" email="test@gmail.com" phonenumber="71982731"></Pet> */}
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
