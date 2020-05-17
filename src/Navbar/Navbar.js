import React from "react";
import petLogo from "../Images/logo.jpg";
const Navbar = () => {
  const tweetText =
    "Pet - A react app to find your favorite app by Junip -https://github.com/junipdewan/pet";
  return (
    <div className="top-nav container mb-5 pb-2">
      <div className="logo-header animated slideInLeft">
        <img src={petLogo} alt="logo" />
        <div className="description">
          <div className="name uppercase">Pet</div>
          <div>Find Your Pet</div>
        </div>
      </div>
      <div className="right-header animated slideInRight">
        <a href="https://github.com/junipdewan/pet" className="mr-2">
          <button type="button" className="btn btn-dark">
            <i className="fa fa-github mr-1"></i>View Source
          </button>
        </a>
        <a href={`https://twitter.com/intent/tweet?text=${tweetText}`}>
          <button type="button" className="btn btn-primary">
            <i className="fa fa-twitter mr-1"></i>Tweet
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
