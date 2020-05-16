import React from "react";
import PropTypes from "prop-types";

const GridItem = ({animal, index}) => {
  let backgroundImage = animal.photos.length > 0 ? animal.photos[0].full : ''
  const imageStyle = {
    backgroundImage: `url(${backgroundImage})`, 
    backgroundRepeat: 'no-repeat', 
    width: '100%'
  }
  return (
    <div className={`pet-box grid-container `}>
      <div className={`grid-body animated fadeInUp delay-${index}s`} style={imageStyle}>
        {animal.name}
      </div>
    </div>
  );
};

export default GridItem;

GridItem.types = {
  index: PropTypes.number,
  animal: PropTypes.shape({
    photos: PropTypes.array
  })
};
