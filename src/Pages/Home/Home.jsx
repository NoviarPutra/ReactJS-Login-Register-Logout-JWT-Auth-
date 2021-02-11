import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./Styles";
import CardItem from "./Card/CardItem";
import axios from "axios";

const Home = () => {
  const classes = useStyles();
  const url = "http://localhost:3001";
  const [arr, setArr] = useState([]);
  useEffect(() => {
    const getItem = () => {
      axios.get(`${url}/api/v1/items/`).then((res) => {
        setArr(res.data.data);
      });
    };
    getItem();
  }, [arr]);
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {arr.map((list) => {
          return (
            <Grid item key={list.id} xs={12} sm={6} md={4} lg={3}>
              <CardItem list={list} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Home;
