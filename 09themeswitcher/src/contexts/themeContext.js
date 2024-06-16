import { createContext, useContext } from "react";

export const ThemeContext = createContext({  //jo value ke ander variable the uno raw definnation ke sath yaha par daal diya 
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() { //aab hum directly useTheme ko run karenge and hume useContext ka reference mil jayega jo ki khud reference return kar raha hai thus hume reference mil gaya
    return useContext(ThemeContext);
};
