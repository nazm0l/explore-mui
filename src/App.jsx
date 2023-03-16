import { Button, CssBaseline } from "@mui/material";
import "./App.css";
import Card from "./components/ProfileCard";
import EpBox from "./components/EpBox";

function App() {
  return (
    <div className="App">
      <EpBox />
      <Card />


      <CssBaseline />
    </div>
  );
}

export default App;
