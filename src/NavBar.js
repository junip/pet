import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = theme => ({
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between"
  }
});

class NavBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="top-bar">
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <IconButton color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Petfinder
            </Typography>
            <div>
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton color="inherit">
                <MoreVertIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
