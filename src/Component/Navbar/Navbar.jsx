import React, { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import useStyles from "./Styles";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();
  const { state, dispatch } = useContext(GlobalContext);

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
