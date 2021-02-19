import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { GlobalContext } from "../../../../Context/GlobalState";
import {
  Container,
  Grid,
  TextField,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Button,
} from "@material-ui/core";
import useStyles from "./Styles";
import TableItems from "../../../Table/TableItems";

const Items = () => {
  const classes = useStyles();
  const { state, handleOnChange, submitItem, request } = useContext(
    GlobalContext
  );
  const timeStamp = new Date().getTime();

  // HANDLE AUTH
  if (!localStorage.getItem("token")) {
    return <Redirect to="/login" />;
  }

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs>
          <form autoComplete="off" onSubmit={submitItem}>
            <div className={classes.label}>
              <Typography>Input Items</Typography>
            </div>
            <div>
              <TextField
                className={classes.field}
                id="name"
                label="Name"
                variant="outlined"
                name="name"
                value={request.name}
                onChange={handleOnChange}
              />
              <TextField
                className={classes.field}
                id="price"
                label="Price"
                variant="outlined"
                name="price"
                value={request.price}
                onChange={handleOnChange}
              />
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="id_type">Type</InputLabel>
                <Select
                  labelId="id_type"
                  id="id_type"
                  name="id_type"
                  label="id_type"
                  value={request.type}
                  onChange={handleOnChange}
                >
                  {state.categories.map((item) => {
                    return (
                      <MenuItem key={item.id + timeStamp} value={item.id}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <Button
                type="submit"
                className={classes.button}
                variant="contained"
                color="default"
              >
                Input
              </Button>
            </div>
          </form>
          <TableItems />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Items;
