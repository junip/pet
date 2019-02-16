import React from 'react';
/**
 *  {} = object it can be null or empty
 *  root => Root element is
 *  React.createElement("div", {} , child element)
 *  React.createElement("div", null, React.createElement("h1", null, "ADOPT ME"))
 */
/**
 * This something called function component /
 * stateless component// you have to convert it to class level of component '
 * if you want to use the state and component lifecycle methods
 *
 * @param {} props
 */
// const Pet = (props) => {
// return React.createElement("div", {}, [
//     React.createElement("div", {}, props.name),
//     React.createElement("div", {}, props.email),
//     React.createElement("div", {}, props.phonenumber)
// ]);

/**
 *  we will use jsx and ultimately jsx calls the React.creatElement
 *  you can configure babel which transpiles this to React.createElement 
 *  parcel automatically handles the transpilation of the jsx.
 * 
 */
// return (
//     <div>
//         <h1>{props.name}</h1>
//         <h2>{props.animal}</h2>
//         <h3>{props.breed}</h3>
//     </div>
// )


//};

class Pet extends React.Component {
    render() {
        const { id, name, breed, media, location, animal } = this.props;

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