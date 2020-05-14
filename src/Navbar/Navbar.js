import React from "react";
import petLogo from "../Images/logo.jpg";
const Navbar = () => {
  return (
    <div className="top-nav container mb-5 pb-2">
      <div className="logo-header">
        <img src={petLogo} alt="logo" />
        <div className="description"><div className="name uppercase">Pet</div><div>Find Your Pet</div></div>
      </div>
      <div className="right-header">
        <a href="https://github.com/junipdewan/pet" className="mr-2">
          <button type="button" className="btn btn-dark">
            <i className="fa fa-github mr-1"></i>View Source
          </button>
        </a>
        <a href="https://github.com/junipdewan/pet">
          <button type="button" className="btn btn-primary">
            <i className="fa fa-twitter mr-1"></i>Tweet
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
