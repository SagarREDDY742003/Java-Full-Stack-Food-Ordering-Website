import { ThemeProvider } from '@emotion/react';
import './App.css';
import { darkTheme } from './theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import CustomerRoute from './Routers/CustomerRoute';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <CustomerRoute />
    </ThemeProvider>
  );
}

export default App;
