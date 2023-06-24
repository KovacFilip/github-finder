import React, { useState } from "react";
import { LIGHT } from "../constants/theme";

const initialValue = {
    theme: "",
    setTheme: (theme: string) => {},
};

export const ThemeContext = React.createContext(initialValue);

interface DarkModeContextProps {
    children: React.ReactNode;
}

export const DarkModeContextProvider: React.FC<DarkModeContextProps> = ({
    children,
}) => {
    const [theme, setTheme] = useState<string>(LIGHT);

    const setThemeHandler = (newTheme: string) => {
		console.log("The new theme: ", newTheme)
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
