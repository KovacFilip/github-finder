import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { DarkModeContextProvider } from "./context/DarkModeContextProvider";
import "./index.css";
import { store } from "./store";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Provider store={store}>
        <DarkModeContextProvider>
            <App />
        </DarkModeContextProvider>
    </Provider>
);
