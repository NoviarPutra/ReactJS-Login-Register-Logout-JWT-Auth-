import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import useStyles from "../../Items/Table/Styles";
import axios from "axios";

const TableCategory = () => {
  const classes = useStyles();
  const url = "http://localhost:3001";
  const [tableCategory, setTableCategory] = useState([]);
  useEffect(() => {
    const getTableCategory = () => {
      axios.get(`${url}/api/v1/items/type`).then((res) => {
        setTableCategory(res.data.data);
      });
    };
    getTableCategory();
  }, []);
  return (
    <>
      <Typography className={classes.label}>Data Items</Typography>
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
            {/* {dataTable.map((table) => {
              return (
                <>
                  <TableRow key={table.id}>
                    <TableCell>{table.name}</TableCell>
                    <TableCell align="right">{table.price}</TableCell>
                    <TableCell align="right">{table.type.name}</TableCell>
                    <TableCell align="right">
                      <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                      >
                        Edit
                      </Button>
                      <Button
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                </>
              );
            })} */}
            {tableCategory.map((table) => {
              return (
                <TableRow key={table.id}>
                  <TableCell align="center">{table.id}</TableCell>
                  <TableCell align="center">{table.name}</TableCell>
                  <TableCell align="center">
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                    >
                      Edit
                    </Button>
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="secondary"
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
