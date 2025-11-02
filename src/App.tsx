import React from "react";

import './App.css';
import { MainRouter } from "./routes/Router";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/main";

function App() {
  return (
    <ThemeProvider theme={theme}>

       <MainRouter />
       </ThemeProvider>
  );
}

export default App;
