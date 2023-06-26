import React, { useState } from "react";
import { LIGHT } from "../constants/theme";

const initialValue = {
    theme: "" as Theme,
    setTheme: (theme: Theme) => {},
};

export const ThemeContext = React.createContext(initialValue);

interface DarkModeContextProps {
    children: React.ReactNode;
}

export const DarkModeContextProvider: React.FC<DarkModeContextProps> = ({
    children,
}) => {
    const [theme, setTheme] = useState<Theme>(LIGHT);

    const setThemeHandler = (newTheme: Theme) => {
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider
            value={{ theme: theme, setTheme: setThemeHandler }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
