import React, { createContext, useReducer } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Box from "@material-ui/core/Box";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Copyright from "./Copyright/Copyright";
import Items from "../Pages/Dashboard/Items/Items";
import Category from "../Pages/Dashboard/Category/Category";

export const AuthContext = createContext();
const initialState = {
  isAuthenticated: false,
  token: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload.token);
      console.log(action);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Router>
      <AuthContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <Navbar />
        {!localStorage.getItem("token") ? (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
            }}
          />
        )}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/items" component={Items} />
          <Route exact path="/category" component={Category} />
        </Switch>
        <Box mt={8}>
          <Copyright />
        </Box>
      </AuthContext.Provider>
    </Router>
  );
};

export default HomePage;
