import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import useStyles from "./Styles";

const Dashboard = () => {
  const classes = useStyles();
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
