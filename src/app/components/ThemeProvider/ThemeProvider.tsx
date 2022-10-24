import React, { createContext, Dispatch, useState } from 'react'

export const ThemeContext = createContext({ theme: 'dark', setTheme: (() => undefined) as Dispatch<any> })

const ThemeProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [theme, setTheme] = useState('dark')

  return <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeProvider
