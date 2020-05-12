import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import color from "./AvatarColor";

const styles = theme => ({
  avatar: {
    backgroundColor: color
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  }
});

class Pet extends React.Component {
  render() {
    const {
      classes,
      name,
      breed,
      media,
      description
    } = this.props;

    function getFirstLetter() {
      return name.split("")[0];
    }

    function nameFormat() {
      return name.substring(0, 5);
    }

    function subheader() {
      let formatBreed = breed.split(",")[0];
      return `${formatBreed}`;
    }

    let photo
    if (media.length > 0) {
     photo =  media[0].medium
    }

    return (
      <Grid item xs={4} sm={4}>
        <Card>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {getFirstLetter()}
              </Avatar>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={nameFormat()}
            subheader={subheader()}
          />
          <CardMedia
            className={classes.media}
            image={photo}
            title="Animal Phto"
          />
          <CardContent>
            <Typography component="p">
              {description}...
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(Pet);

// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";

// class Pet extends React.Component {
//   render() {
//     const { name, breed, media, location, animal } = this.props;

//     let photos = [];
//     if (media && media.photos && media.photos.photo) {
//       photos = media.photos.photo.filter(pic => pic["@size"] === "pn");
//     }
//     return (
//       <div className="pet">
//         <div className="image-container">
//           <img src={photos[0].value} alt="animal images" />
//         </div>
//         <div>
//           <h1>{name}</h1>
//           <h2>
//             {animal}-{breed}-{location}
//           </h2>
//         </div>
//       </div>
//     );
//   }
// }

// export default Pet;
