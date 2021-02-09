import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./Styles";
import CardItem from "./Card/CardItem";

const Home = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {/* {product.map((list) => {
          return (
            <Grid item key={list.id} xs={12} sm={6} md={4} lg={3}>
              <Product products={list} onAddToCart={onAddToCart} />
            </Grid>
          );
        })} */}
        <CardItem />
      </Grid>
    </main>
  );
};

export default Home;
