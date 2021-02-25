import React, { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import {
  Button,
  InputBase,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import useStyles from "./Styles";

const TableItems = () => {
  const classes = useStyles();
  const { state, deleteItem, handleUpdate, onSearchItem } = useContext(
    GlobalContext
  );
  const timeStamp = new Date().getTime();
  const [search, setSearch] = useState("");

  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      onSearchItem(search);
      setSearch("");
    }
  };

  return (
    <>
      <Typography className={classes.label}>Data Items</Typography>
      <div className={classes.search}>
        <InputBase
          placeholder="Search…"
          name="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyPress={handleKeyPressed}
          autoComplete="off"
        />
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.items.map((table) => {
              return (
                <TableRow key={table.id + timeStamp}>
                  <TableCell>{table.name}</TableCell>
                  <TableCell align="right">{table.price}</TableCell>
                  <TableCell align="right">{table.type.name}</TableCell>
                  <TableCell align="right">
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                      onClick={() => handleUpdate(table)}
                    >
                      Edit
                    </Button>
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="secondary"
                      onClick={() => deleteItem(table.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableItems;
