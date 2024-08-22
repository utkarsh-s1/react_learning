import {createContext, useContext} from "react"

export const themeContext = createContext(
    {
    themeMode:"dark",
    darkTheme:()=>{},
    lightTheme:()=>{}

}
)

export const ThemeContextProvider = themeContext.Provider

export function useTheme(){
    return useContext(themeContext)

}