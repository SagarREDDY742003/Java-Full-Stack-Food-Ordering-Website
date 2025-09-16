import { Box, Card, CardHeader, IconButton } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Create } from "@mui/icons-material";

const orders = [1, 1, 1, 1];

const FoodCategoryTable = () => {
  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          title={"Food Category"}
          sx={{ pt: 2, alignItems: "center" }}
          action={
            <IconButton aria-label="settings">
              <Create />
            </IconButton>
          }
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map(() => (
                <TableRow
                  // key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{1}</TableCell>
                  <TableCell align="left">{"pizza"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};

export default FoodCategoryTable;
