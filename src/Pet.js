import React from 'react';
class Pet extends React.Component {
    render() {
        const { name, breed, media, location, animal } = this.props;

        let photos = [];
        if (media && media.photos && media.photos.photo) {
            photos = media.photos.photo.filter(pic => pic['@size'] === 'pn')
        }
        return (
            <div className="pet">
                <div className="image-container">
                    <img src={photos[0].value} alt="animal images"></img>
                </div>
                <div>
                    <h1>{name}</h1>
                    <h2>{animal}-{breed}-{location}</h2>
                </div>
            </div>
        )
    }
}

export default Pet;