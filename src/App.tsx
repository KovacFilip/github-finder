import { ThemeProvider, createTheme } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "./context/DarkModeContextProvider";
import { Layout } from "./layout/Layout";

function App() {
    const themeCtx = useContext(ThemeContext);

    const theme = createTheme({
        palette: {
            mode: themeCtx.theme,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Layout />
        </ThemeProvider>
    );
}

export default App;
