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

const TableCategory = () => {
  const classes = useStyles();
  const { state, deleteCategory, handleUpdate, onSearchCategory } = useContext(
    GlobalContext
  );
  const timeStamp = new Date().getTime();
  const [search, setSearch] = useState("");

  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      onSearchCategory(search);
      setSearch("");
    }
  };
  return (
    <>
      <Typography className={classes.label}>Data Ctaegory</Typography>
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
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name Category</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.categories.map((table) => {
              return (
                <TableRow key={table.id + timeStamp}>
                  <TableCell align="center">{table.id}</TableCell>
                  <TableCell align="center">{table.name}</TableCell>
                  <TableCell align="center">
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
                      onClick={() => deleteCategory(table.id)}
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

export default TableCategory;
