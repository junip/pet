import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "animate.css/animate.compat.css";
import "./scss/main.scss";

let rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
