import { Box, Card, CardContent, CardHeader } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const orders = [1, 1, 1, 1];

const OrderTable = () => {
  return (
    <Box>
      <Card className="mt-1">
        <CardHeader title={"All Orders"} sx={{ pt: 2, alignItems: "center" }} />
        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">Image</TableCell>
                  <TableCell align="right">Customer</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Ingredients</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Update</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map(() => (
                  <TableRow
                    // key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">{1}</TableCell>
                    <TableCell align="right">{"image"}</TableCell>
                    <TableCell align="right">{"sagar@gmail.com"}</TableCell>
                    <TableCell align="right">{"599"}</TableCell>
                    <TableCell align="right">{"Biryain"}</TableCell>
                    <TableCell align="right">{"Tomato Sauce"}</TableCell>
                    <TableCell align="right">{"Pending"}</TableCell>
                    <TableCell align="right">{"status"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OrderTable;
