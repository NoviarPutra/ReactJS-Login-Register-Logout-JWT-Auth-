import React, { useContext } from "react";
import useStyles from "./Styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { Link } from "react-router-dom";
import { AuthContext } from "../../HomePage/HomePage";

const Navbar = () => {
  const classes = useStyles();
  const { dispatch } = useContext(AuthContext);

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {!localStorage.getItem("token") ? (
              <>
                <Typography variant="h6" className={classes.title}>
                  Home Page
                </Typography>
                <div className={classes.search}>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
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
              </>
            ) : (
              <>
                <Typography variant="h6" className={classes.title}>
                  Dashboard
                </Typography>
                <div className={classes.search}>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
                <div>
                  <Link to="/dashboard">
                    <Typography
                      variant="h6"
                      style={{ marginLeft: "20px" }}
                      className={classes.link}
                    >
                      Home
                    </Typography>
                  </Link>
                </div>
                <div>
                  <Link to="/items">
                    <Typography
                      variant="h6"
                      style={{ marginLeft: "20px" }}
                      className={classes.link}
                    >
                      Items
                    </Typography>
                  </Link>
                </div>
                <div>
                  <Link to="/category">
                    <Typography
                      variant="h6"
                      style={{ marginLeft: "20px" }}
                      className={classes.link}
                    >
                      Category
                    </Typography>
                  </Link>
                </div>
                <IconButton
                  color="inherit"
                  onClick={() =>
                    dispatch({
                      type: "LOGOUT",
                    })
                  }
                >
                  <Typography>Log-Out</Typography>
                </IconButton>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default Navbar;
