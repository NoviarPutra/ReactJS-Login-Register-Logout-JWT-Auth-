import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import useStyles from "./Styles";

const CardItem = ({ list }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardMedia className={classes.media} />
        <CardContent>
          <div className={classes.content}>
            <Typography variant="h6" gutterBottom>
              {list.name}
            </Typography>
            <Typography variant="h6">{list.price}</Typography>
          </div>
          <Typography variant="body2" color="textSecondary">
            {list.type.name}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardItem;
