import React from "react";
import "./scss/main.scss";
import Navbar from "./Navbar/Navbar";
import TokenAlert from "./Alerts/TokenAlert";
import Grid from "./Pets/Grid";

function App() {
  return (
    <div>
      <Navbar />
      <TokenAlert />
      <Grid />
    </div>
  );
}

export default App;
