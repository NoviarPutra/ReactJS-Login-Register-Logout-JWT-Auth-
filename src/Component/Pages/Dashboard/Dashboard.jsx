import React from "react";
import { Redirect } from "react-router-dom";
import { Container, Grid, Typography } from "@material-ui/core";
import useStyles from "./Styles";

const Dashboard = () => {
  const classes = useStyles();
  if (!localStorage.getItem("token")) {
    return <Redirect to="/login" />;
  }
  return (
    <div className={classes.root}>
      <Container maxWidth="md" spacing={3}>
        <Grid container item xs={12}>
          <Typography variant="h1">Welcome Jing !</Typography>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;
