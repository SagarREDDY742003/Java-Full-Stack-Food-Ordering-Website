import { Box, Card, CardHeader, IconButton } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Create, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const orders = [1, 1, 1, 1];

const MenuTable = () => {

  const navigate = useNavigate();
  return (
    <Box>
      <Card className="mt-1">
        <CardHeader
          title={"All Menu Items"}
          sx={{ pt: 2, alignItems: "center" }}
          action={
            <IconButton onClick={()=>navigate("/admin/restaurant/addMenu")} aria-label="settings">
              <Create />
            </IconButton>
          }
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Ingredients</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Avaliability</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map(() => (
                <TableRow
                  // key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{"image"}</TableCell>
                  <TableCell align="right">{"Burger"}</TableCell>
                  <TableCell align="right">{"Ingredients"}</TableCell>
                  <TableCell align="right">{"599"}</TableCell>
                  <TableCell align="right">{"IN STOCK"}</TableCell>
                  <TableCell align="right">
                    <IconButton>
                      <Delete className="text-red-600" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};

export default MenuTable;
