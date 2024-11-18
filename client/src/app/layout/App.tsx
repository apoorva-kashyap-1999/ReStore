import { Catalog } from "../features/catalog/Catalog";
import { Header } from "./Header";
import { useState } from "react";
import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";


function App() {

  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType
    }
  })

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />  {/* resets css */}
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Catalog />
      </Container>

    </ThemeProvider>
  );
}

export default App;