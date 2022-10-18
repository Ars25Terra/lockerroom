import React, {useEffect, useState} from 'react';
import './app/style/style.css'
import Filter from "./app/components/Filter/Filter";
import ThemeSwitcher from "./app/components/ThemeSwitcher/ThemeSwitcher";
import setBodyColor from "./app/Utils";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CardsGrid from "./app/components/CardsGrid/CardsGrid";
import {IPerson} from "./app/models/Models";
import DemoDataService from "./app/service/DemoDataService";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
})

const lightTheme = createTheme({
    palette: {
        mode: 'light',
    }
})

const persons: IPerson[] = DemoDataService().getPersons(80)


function App() {

    const [theme, setTheme] = useState<string>('dark-theme')

    useEffect(() => {
        handleThemeChange(theme)
    })

    const handleThemeChange = (theme: string) => {
        setTheme(theme)
        theme === 'dark-theme'
            ? setBodyColor('#000000')
            : setBodyColor('#F4F7FC')
    }

    /**
     * All components props states
     */
    const [ageFilterRange, setAgeFilterRange] = useState<number|number[]>([0, 100])
    const [searchString, setSearchString] = useState('')
    const [genderFilter, setGenderFilter] = useState('male')
    const [sportsFilterList, setSportsFilterList] = useState<string[]>(['all'])
    const [countryFilterList, setCountryFilterList] = useState<string[]>(['all'])
    /**
     * All components actions implementation
     */
    const handleAgeFilterChange = (range: number|number[]) => {
        setAgeFilterRange(range)
    }

    const handleSearchStringChange = (value: string) => {
        setSearchString(value)
    }

    const handleGenderFilterChange = (value: string) => {
        setGenderFilter(value)
    }

    const handleSportListFilterChange = (checked: boolean, value: string) => {
        const indexToRemove = sportsFilterList.indexOf(value)
        if (checked) {
            if (value === 'all') {
                setSportsFilterList(['all'])
                return
            } else {
                setSportsFilterList(prevValue => (
                    prevValue.filter((value, i) => i !== sportsFilterList.indexOf('all'))
                ))
            }
            setSportsFilterList(sportsFilterList => [...sportsFilterList, value])
        } else {
            setSportsFilterList(prevValue => (
                prevValue.filter((value, i) => i !== indexToRemove)
            ));
        }
    }

    const getFilteredPersons = (personList: IPerson[]): IPerson[] => {
        const minAge = (ageFilterRange as number[])[0]
        const maxAge = (ageFilterRange as number[])[1]
        return personList.filter(person => {
            return searchString
                ? person.name.toLowerCase().includes(searchString.toLowerCase())
                : true
        }).filter(person => {
            return person.age >= minAge && person.age <= maxAge
        }).filter(person => {
            return person.gender?.toLowerCase() === genderFilter.toLowerCase()
        }).filter(person => {
            return sportsFilterList.length === 0 || sportsFilterList.includes('all')
                ? true
                : sportsFilterList.includes(person.sport)
        })
    }

    return (<ThemeProvider theme={theme === 'dark-theme' ? darkTheme : lightTheme}>
        <ThemeSwitcher theme={theme} onChange={handleThemeChange}/>
        <div className={`main-container`}>
            <div>
                <Filter theme={theme}
                        selectedSportsList={sportsFilterList}
                        selectedCountriesList={countryFilterList}
                        genderFilter={genderFilter}
                        searchString={searchString}
                        ageFilterRange={ageFilterRange}
                        onCountryCheckBoxChange={()=>{}}
                        onSportCheckBoxChange={handleSportListFilterChange}
                        onSearchStringChange={handleSearchStringChange}
                        onGenderFilterChange={handleGenderFilterChange}
                        onAgeFilterChange={handleAgeFilterChange}/>
            </div>
            <CardsGrid theme={theme} personList={getFilteredPersons(persons)}/>
        </div>
    </ThemeProvider>)

}

export default App;
