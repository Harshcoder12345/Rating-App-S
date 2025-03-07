import { createContext, useState } from "react"

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(false)

    const ThemeChange = () => {
        setTheme(theme ? false : true)
    }

    return (
        <ThemeContext.Provider  value = {{theme, ThemeChange}} >
{children}
        </ThemeContext.Provider>
    )
}


export default ThemeContext