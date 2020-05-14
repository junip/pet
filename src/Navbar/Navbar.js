import React from 'react';
import petLogo from "../Images/logo.jpg";
const Navbar = () => {
  return(
   <div className="top-nav container mb-5 pb-4">
       <div className="logo-header">
         <img src={petLogo} alt="logo" />
         <div className="description"> Petfinder Logo for the usages</div>
       </div>
       <div className="right-header">
         
       </div>
    </div>
  )
}

export default Navbar