import { DarkModeContextProvider } from "./context/DarkModeContextProvider";
import { Layout } from "./layout/Layout";

function App() {
    return (
        <DarkModeContextProvider>
            <Layout />
        </DarkModeContextProvider>
    );
}

export default App;
