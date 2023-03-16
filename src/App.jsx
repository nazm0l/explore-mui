import { Box, Button, createTheme, CssBaseline, Switch, ThemeProvider, Typography } from "@mui/material";
import "./App.css";
import Card from "./components/ProfileCard";
import EpBox from "./components/EpBox";
import { useState } from "react";

function App() {

  const [dark, setDark] = useState(false)

  const themeDark = createTheme({
    palette:{
      mode: 'dark'
    }
  })

  const themeLight = createTheme({
    palette:{
      mode: 'light'
    }
  })

  return (

    <ThemeProvider theme={dark ? themeDark : themeLight}>
    <Box className="App">
      
      <Typography level="h3">Turn On Dark Mode</Typography>
      <Switch onClick={()=>{setDark(!dark)}} />
      <EpBox />
      <Card />


      <CssBaseline />
    </Box>
    </ThemeProvider>
  );
}

export default App;
