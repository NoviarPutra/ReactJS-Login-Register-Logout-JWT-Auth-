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
import useStyles from "./Styles";
import axios from "axios";

const TableItems = () => {
  const classes = useStyles();
  const url = "http://localhost:3001";
  const [dataTable, setDataTable] = useState([]);
  useEffect(() => {
    const getDataItems = () => {
      axios.get(`${url}/api/v1/items/`).then((res) => {
        setDataTable(res.data.data);
      });
    };
    getDataItems();
  }, []);

  return (
    <>
      <Typography className={classes.label}>Data Items</Typography>
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
            {dataTable.map((table) => {
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
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableItems;
