import React, { useContext, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../../../../Context/GlobalState";
import ActionType from "../../../../Context/globalActionType";
import {
  Avatar,
  Button,
  CssBaseline,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./Styles";

const Login = (props) => {
  const classes = useStyles();
  const url = "http://localhost:3001";
  const { dispatch } = useContext(GlobalContext);
  const initialState = {
    username: "",
    password: "",
    isSubmit: false,
    errorMessage: null,
  };
  const [data, setData] = useState(initialState);

  // HANDLE ON_CHANGE
  const handleInputChange = (event) => {
    setData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  // HANDLE LOGIN
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
            type: ActionType.LOGIN,
            payload: res.data,
          });
          props.history.push("/dashboard");
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
