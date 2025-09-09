import { ThemeProvider } from '@emotion/react';
import './App.css';
import { darkTheme } from './theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import CustomerRoute from './Routers/CustomerRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './state/Authentication/Action';
import { findCart } from './state/Cart/Action';

function App() {

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const {auth} = useSelector(store=>store);

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(jwt));
  },[auth.jwt, dispatch, jwt])

  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <CustomerRoute />
    </ThemeProvider>
  );
}

export default App;
