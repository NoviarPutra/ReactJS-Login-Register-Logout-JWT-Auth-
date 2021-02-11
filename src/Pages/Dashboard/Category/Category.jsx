import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import useStyles from "./Styles";
import TableCategory from "./Table/TableCategory";

const Category = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs>
          <form>
            <div className={classes.label}>
              <Typography>Add New Category</Typography>
            </div>
            <div>
              <TextField
                className={classes.field}
                id="name"
                label="Name"
                variant="outlined"
                name="name"
                autoComplete="off"
              />
              <Button
                className={classes.button}
                variant="contained"
                color="default"
              >
                Input
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs>
            <TableCategory />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Category;
