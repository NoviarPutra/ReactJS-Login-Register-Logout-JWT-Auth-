import React from "react";
import useStyles from "./Styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              REQUEST-NYA JASON
            </Typography>
            <div>
              <Link to="/">
                <Typography variant="h6" className={classes.link}>
                  Home
                </Typography>
              </Link>
            </div>
            <div>
              <Link to="/register">
                <Typography
                  variant="h6"
                  className={classes.link}
                  style={{ marginLeft: "20px" }}
                >
                  Register
                </Typography>
              </Link>
            </div>
            <div>
              <Link to="/login">
                <Typography
                  variant="h6"
                  style={{ marginLeft: "20px" }}
                  className={classes.link}
                >
                  Login
                </Typography>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default Navbar;
