import React, { useEffect, useState } from "react";
import axios from "axios";
//import ReactDOM from 'react-dom';
import { render } from "react-dom";
//import pf from 'petfinder-client';
import NavBar from "./NavBar";
import RandomPet from "./RandomPet";

const marginStyle = {
  margin: "40px 0px 0px 0px"
};

function App() {
  return (
    <div>
      <NavBar />
      <div style={marginStyle}>
        <RandomPet />
      </div>
    </div>
  );
}

let rootElement = document.getElementById("root");
render(React.createElement(App), rootElement);
