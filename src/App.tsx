import React, {useEffect, useState} from 'react';
import './app/style/style.css'
import Filter from "./app/components/Filter/Filter";
import ThemeSwitcher from "./app/components/ThemeSwitcher/ThemeSwitcher";
import setBodyColor from "./app/Utils";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CardsGrid from "./app/components/CardsGrid/CardsGrid";
import {IPerson} from "./app/models/Models";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

const persons: IPerson[] = [
    {
        name: 'Very long Person Name to Test, For real this Person Has trully long name. AAAAAAAAAAAAAAAAAAAAAA',
        position: 'CEO',
        country: 'Georgia',
        sport: 'Soccer'
    },
    {
        name: 'Very long Person Name to Test',
        position: 'CEO',
        country: 'Georgia',
        sport: 'Soccer'
    },
    {
        name: 'Very long Person Name to Test',
        position: 'CEO',
        country: 'Georgia',
        sport: 'Soccer'
    },
    {
        name: 'Very long Person Name to Test',
        position: 'CEO',
        country: 'Georgia',
        sport: 'Soccer'
    },
    {
        name: 'Very long Person Name to Test',
        position: 'CEO',
        country: 'Georgia',
        sport: 'Soccer'
    },
    {
        name: 'Very long Person Name to Test',
        position: 'CEO',
        country: 'Georgia',
        sport: 'Soccer'
    },
    {
        name: 'Very long Person Name to Test',
        position: 'CEO',
        country: 'Georgia',
        sport: 'Soccer'
    },
    {
        name: 'Very long Person Name to Test',
        position: 'CEO',
        country: 'Georgia',
        sport: 'Soccer'
    },
    {
        name: 'Very long Person Name to Test',
        position: 'CEO',
        country: 'Georgia',
        sport: 'Soccer'
    },
    {
        name: 'Very long Person Name to Test',
        position: 'CEO',
        country: 'Georgia',
        sport: 'Soccer'
    },
    {
        name: 'Very long Person Name to Test',
        position: 'CEO',
        country: 'Georgia',
        sport: 'Soccer'
    },
    {
        name: 'Very long Person Name to Test',
        position: 'CEO',
        country: 'Georgia',
        sport: 'Soccer'
    },
    {
        name: 'Very long Person Name to Test',
        position: 'CEO',
        country: 'Georgia',
        sport: 'Soccer'
    },
    {
        name: 'Very long Person Name to Test',
        position: 'CEO',
        country: 'Georgia',
        sport: 'Soccer'
    }
]

function App() {

    const [theme, setTheme] = useState<string>('dark-theme')

    useEffect(() => {
        handleThemeChange(theme)
    })

    const handleThemeChange = (theme: string) => {
        setTheme(theme)
        theme === 'dark-theme'
            ? setBodyColor('#000000')
            : setBodyColor('#ffffff')
    }

    return (<ThemeProvider theme={theme === 'dark-theme' ? darkTheme : lightTheme}>
            <ThemeSwitcher onChange={handleThemeChange}/>
            <div className={`main-container`}>
                <Filter theme={theme}/>
                <CardsGrid theme={theme} personList={persons}/>
            </div>
        </ThemeProvider>
  );
}

export default App;
