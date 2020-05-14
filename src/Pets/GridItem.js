import React from "react";
import PropTypes from "prop-types";

const GridItem = ({ animal }) => {
  return (
    <div className="pet-box grid-container">
      <div className="grid-body">
       {animal.name}
      </div>
    </div>
  );
};

export default GridItem;

GridItem.types = {
  animal: PropTypes.object.isRequired
};
