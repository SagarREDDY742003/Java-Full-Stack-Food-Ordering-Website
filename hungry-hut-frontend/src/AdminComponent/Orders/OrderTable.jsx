import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import {
  getRestaurantsOrder,
  updateOrderStatus,
} from "../../state/RestaurantOrder/Action";

const orderStatus = [
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
  { label: "Out For Delivery", value: "OUT_FOR_DELIVERY" },
  { label: "Delivered", value: "DELIVERED" },
];

const OrderTable = ({filter}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const restaurant = useSelector((store) => store.restaurant.usersRestaurant);
  const orderBeforeFilter = useSelector((store) => store.restaurantOrder.orders);
  const orders = filter === "ALL" ? orderBeforeFilter : orderBeforeFilter?.filter((order) => order.orderStatus === filter);
  console.log(orders)

  useEffect(() => {
    dispatch(
      getRestaurantsOrder({
        jwt: localStorage.getItem("jwt"),
        restaurantId: restaurant.id,
      })
    );
  }, [dispatch, restaurant]);

  const handleOrderStatus = (orderId, orderStatus) => {
    dispatch(
      updateOrderStatus({
        orderId,
        orderStatus,
        jwt: localStorage.getItem("jwt"),
      })
    );
    handleClose();
  };

  return (
    <Box>
      <Card className="mt-1">
        <CardHeader title={"All Orders"} sx={{ pt: 2, alignItems: "center" }} />
        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Id</TableCell>
                  <TableCell align="center">Image</TableCell>
                  <TableCell align="center">Customer</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Ingredients</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">Update</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders?.map((order) => (
                  <TableRow
                    key={order.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">
                      {order.id}
                    </TableCell>
                    <TableCell align="center">
                      <div className="flex flex-wrap gap-1">
                        {order.items.map((item) => (
                          <Avatar src={item.food.images[0]} />
                        ))}
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      {order.customer.fullName}
                    </TableCell>
                    <TableCell align="center">{order.totalPrice}</TableCell>
                    <TableCell align="center">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {order.items?.map((item) => (
                          <Chip key={item.id} label={item.food.name} />
                        ))}
                      </div>
                    </TableCell>
                    <TableCell align="center">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {[
                          ...new Set(
                            order.items.flatMap((item) => item.ingredients)
                          ),
                        ].map((ingredient) => (
                          <Chip key={ingredient} label={ingredient} />
                        ))}
                      </div>
                    </TableCell>
                    <TableCell align="center">{order.orderStatus}</TableCell>
                    <TableCell align="center">
                      <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        variant="outlined"
                      >
                        Update Status
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                          list: {
                            "aria-labelledby": "basic-button",
                          },
                        }}
                      >
                        {orderStatus.map((item) => (
                          <MenuItem key={item.value} onClick={()=>handleOrderStatus(order.id,item.value)}>
                            {item.label}
                          </MenuItem>
                        ))}
                      </Menu>
                    </TableCell>
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
