import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import useStyles from "./Styles";

const CardItem = () => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia className={classes.media} />
        <CardContent>
          <div className={classes.content}>
            <Typography variant="h6" gutterBottom>
              NAMA
            </Typography>
            <Typography variant="h6">HARGA</Typography>
          </div>
          <Typography variant="body2" color="textSecondary">
            PUBLISHER
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardItem;
