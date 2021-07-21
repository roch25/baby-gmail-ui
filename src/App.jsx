import React from "react";
import "./App.css";
import logo from "./favicon.svg";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  logo: {
    display: "flex",
    alignItems: "center"
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer" edge="start">
          <MenuIcon />
        </IconButton>
        <div className={classes.logo}>
          <img src={logo} alt="gmail" />
        </div>
      </Toolbar>
    </div>
  );
}

export default App;
