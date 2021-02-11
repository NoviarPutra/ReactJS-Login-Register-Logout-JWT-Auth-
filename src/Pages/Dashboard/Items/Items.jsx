import React, { useEffect, useState } from "react";
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
import axios from "axios";
import useStyles from "./Styles";
import TableItems from "./Table/TableItems";

const Items = () => {
  const classes = useStyles();
  const url = "http://localhost:3001";
  const [type, setType] = useState([]);
  const initialState = {
    name: "",
    id_type: null,
    price: null,
  };
  const [data, setData] = useState(initialState);
  const handleChange = (event) => {
    console.log(event.target.value);
    setData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };
  const addItem = (event) => {
    event.preventDefault();
    const requestBody = {
      name: data.name,
      id_type: data.id_type,
      price: data.price,
    };
    const config = {
      headers: {
        Authorization: "Bearer" + " " + localStorage.getItem("token"),
      },
    };
    axios
      .post(`${url}/api/v1/items`, requestBody, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const getType = () => {
      axios.get(`${url}/api/v1/items/type`).then((res) => {
        setType(res.data.data);
      });
    };
    getType();
  }, []);
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs>
          <form autoComplete="off" onSubmit={addItem}>
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
                value={data.name}
                onChange={handleChange}
              />
              <TextField
                className={classes.field}
                id="price"
                label="Price"
                variant="outlined"
                name="price"
                value={data.price}
                onChange={handleChange}
              />
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="id_type">Type</InputLabel>
                <Select
                  labelId="id_Type"
                  id="id_type"
                  name="id_type"
                  label="id_type"
                  value={data.id_type}
                  onChange={handleChange}
                >
                  {type.map((item) => {
                    return <MenuItem value={item.id}>{item.name}</MenuItem>;
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
