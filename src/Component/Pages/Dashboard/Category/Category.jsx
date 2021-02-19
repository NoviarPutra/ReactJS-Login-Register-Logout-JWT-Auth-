import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { GlobalContext } from "../../../../Context/GlobalState";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import useStyles from "../../../Table/Styles";
import TableCategory from "../../../Table/TableCategory";

const Category = () => {
  const classes = useStyles();
  const { submitCategory, handleOnChange, request } = useContext(GlobalContext);

  if (!localStorage.getItem("token")) {
    return <Redirect to="/login" />;
  }
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs>
          <form onSubmit={submitCategory}>
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
                value={request.name}
                onChange={handleOnChange}
              />
              <Button
                type="submit"
                className={classes.button}
                variant="contained"
                color="default"
                name="category"
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
