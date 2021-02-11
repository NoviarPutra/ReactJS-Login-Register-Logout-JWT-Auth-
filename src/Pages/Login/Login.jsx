import React, { useContext, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./Styles";
import axios from "axios";
import { AuthContext } from "../../HomePage/HomePage";

const Login = () => {
  const classes = useStyles();
  const url = "http://localhost:3001";
  const { dispatch } = useContext(AuthContext);
  const initialState = {
    username: "",
    password: "",
    isSubmit: false,
    errorMessage: null,
  };

  const [data, setData] = useState(initialState);

  const handleInputChange = (event) => {
    setData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };
  const handleLogin = (event) => {
    event.preventDefault();
    setData((prevState) => {
      return {
        ...prevState,
        isSubmit: true,
        errorMessage: null,
      };
    });

    const requestBody = {
      username: data.username,
      password: data.password,
    };

    axios
      .post(`${url}/api/v1/login`, requestBody)
      .then((res) => {
        if (res.data.data === "Login success") {
          dispatch({
            type: "LOGIN",
            payload: res.data,
          });
        }
      })
      .catch((err) => {
        setData((prevState) => {
          return {
            ...prevState,
            isSubmit: false,
            errorMessage: err.response.data.data,
          };
        });
        setTimeout(() => {
          setData((prevState) => {
            return {
              ...prevState,
              errorMessage: null,
            };
          });
        }, 3000);
      });
    setData((prevState) => {
      return {
        ...prevState,
        username: "",
        password: "",
      };
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {data.errorMessage && (
          <Alert severity="error">{data.errorMessage}</Alert>
        )}
        <form className={classes.form} noValidate onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="off"
            autoFocus
            value={data.username}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="off"
            value={data.password}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={data.isSubmit}
          >
            {data.isSubmit ? "...Loading" : "Sign-In"}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
