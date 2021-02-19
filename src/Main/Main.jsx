import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from "../Context/GlobalState";
import Box from "@material-ui/core/Box";
import Navbar from "../Component/Navbar/Navbar";
import Copyright from "../Component/Copyright/Copyright";
import Items from "../Component/Pages/Dashboard/Items/Items";
import Category from "../Component/Pages/Dashboard/Category/Category";
import Dashboard from "../Component/Pages/Dashboard/Dashboard";
import Login from "../Component/Pages/User/Login/Login";
import Register from "../Component/Pages/User/Register/Register";
import Home from "../Component/Pages/Home/Home";

const Main = () => {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
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
      </Router>
    </GlobalProvider>
  );
};

export default Main;
