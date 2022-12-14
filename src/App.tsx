import React, {useEffect, useState} from 'react';
import './app/style/style.css'
import Filter from "./app/components/Filter/Filter";
import ThemeSwitcher from "./app/components/ThemeSwitcher/ThemeSwitcher";
import setBodyColor from "./app/Utils";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CardsGrid from "./app/components/CardsGrid/CardsGrid";
import {IPerson} from "./app/models/Models";
import DemoDataService from "./app/service/DemoDataService";

/**
 * Theme 'bicycles' to support MUI Accordions
 */
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

/**
 * Generates list of persons for demo purposes
 */
const persons: IPerson[] = DemoDataService().getPersons(80)

function App() {

    /**
     * Current theme state
     */
    const [theme, setTheme] = useState<string>('dark-theme')

    useEffect(() => {
        handleThemeChange(theme)
    })

    /**
     * A little "bicycle" to change the color of background
     * @param theme
     */
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
    const [isShowCardGird, setShowCardGrid] = useState<boolean>(true)
    const [isAllButtonPressed, setAllButtonPressed] = useState<boolean>(true)
    const [isDraftButtonPressed, setDraftButtonPressed] = useState<boolean>(false)
    const [personList, setPersonList] = useState<IPerson[]>(persons)

    /**
     * All components actions implementation
     */
    const handleAgeFilterChange = (range: number|number[]) => {
        setAgeFilterRange(range)
    }

    /**
     * Process event from Search component
     * @param value search text
     */
    const handleSearchStringChange = (value: string) => {
        setSearchString(value)
    }

    /**
     * Process change event from Gender Filter
     * @param value gender
     */
    const handleGenderFilterChange = (value: string) => {
        setGenderFilter(value)
    }

    /**
     * Process click on 'All' button
     */
    const handleAllButtonClick = () => {
        setAllButtonPressed(true)
        setDraftButtonPressed(false)
    }

    /**
     * Process click on 'Draft' button
     */
    const handleDraftButtonClick = () => {
        setAllButtonPressed(false)
        setDraftButtonPressed(true)
    }

    /**
     * Function to process changes in CheckBox filter
     * @param checked
     * @param value Which value was checked or unchecked
     * @param checkedFilterList state array with checked values
     * @param dispatch Dispatch function to update state array with checked values
     */
    const handleCheckBoxFilterChange = (checked: boolean, value: string,
                                        checkedFilterList: string[],
                                        dispatch: React.Dispatch<React.SetStateAction<string[]>>) => {
        const indexToRemove = checkedFilterList.indexOf(value)
        if (checked) {
            if (value === 'all') {
                dispatch(['all'])
                return
            } else {
                dispatch(prevValue => (
                    prevValue.filter((value, i) => i !== checkedFilterList.indexOf('all'))
                ))
            }
            dispatch(checkedFilterList => [...checkedFilterList, value])
        } else {
            dispatch(prevValue => (
                prevValue.filter((value, i) => i !== indexToRemove)
            ));
        }
    }

    /**
     * Connect person with mentioned id
     * @param id person's id
     */
    const handleConnectCard = (id: number) => {
        const newPersons = persons.map(person => {
            if (person.id === id) {
                person.isConnected = true
            }
            return person
        })
        setPersonList(newPersons)
    }

    /**
     * Main Filtering Function
     * @param personList List of the persons to filter
     */
    const getFilteredPersons = (personList: IPerson[]): IPerson[] => {
        const minAge = (ageFilterRange as number[])[0]
        const maxAge = (ageFilterRange as number[])[1]
        let primaryFilteringList = personList
        if (isDraftButtonPressed) {
            primaryFilteringList = personList.filter(person => person.isConnected)
        }
        return primaryFilteringList.filter(person => {
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
        }).filter(person => {
            return countryFilterList.length === 0 || countryFilterList.includes('all')
                ? true
                : countryFilterList.includes(person.country)
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
                        isAllButtonPressed={isAllButtonPressed}
                        isDraftButtonPressed={isDraftButtonPressed}
                        onAllButtonClick={handleAllButtonClick}
                        onDraftButtonClick={handleDraftButtonClick}
                        onCountryCheckBoxChange={(checked, value) =>
                            handleCheckBoxFilterChange(checked, value, countryFilterList, setCountryFilterList)}
                        onChangeShowCardGrid={(value) => setShowCardGrid(value)}
                        onSportCheckBoxChange={(checked, value) =>
                            handleCheckBoxFilterChange(checked, value, sportsFilterList, setSportsFilterList)}
                        onSearchStringChange={handleSearchStringChange}
                        onGenderFilterChange={handleGenderFilterChange}
                        onAgeFilterChange={handleAgeFilterChange}/>
            </div>
            {isShowCardGird && <CardsGrid theme={theme}
                                          personList={getFilteredPersons(personList)}
                                          onCardButtonClick={handleConnectCard}/>}
        </div>
    </ThemeProvider>)

}

export default App;
