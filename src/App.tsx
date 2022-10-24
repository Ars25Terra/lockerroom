import React, { useContext, useState } from 'react'
import './app/styles/_styles.scss'
import Filter from './app/components/Filter/Filter'
import ThemeSwitcher from './app/components/ThemeSwitcher/ThemeSwitcher'
import CardsGrid from './app/components/CardsGrid/CardsGrid'
import { IPerson } from './app/models/Models'
import DemoDataService from './app/service/DemoDataService'
import { ThemeContext } from './app/components/ThemeProvider/ThemeProvider'

/**
 * Generates list of persons for demo purposes
 */
const persons: IPerson[] = DemoDataService().getPersons(80)

function App (): JSX.Element {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleThemeChange = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  /**
   * All components props states
   */
  const [ageFilterRange, setAgeFilterRange] = useState<number | number[]>([
    0, 100
  ])
  const [searchString, setSearchString] = useState('')
  const [genderFilter, setGenderFilter] = useState('male')
  const [sportsFilterList, setSportsFilterList] = useState<string[]>(['all'])
  const [countryFilterList, setCountryFilterList] = useState<string[]>(['all'])
  const [isShowCardGird, setShowCardGrid] = useState<boolean>(true)
  const [isAllButtonPressed, setAllButtonPressed] = useState<boolean>(true)
  const [isDraftButtonPressed, setDraftButtonPressed] =
    useState<boolean>(false)
  const [personList, setPersonList] = useState<IPerson[]>(persons)

  /**
   * All components actions implementation
   */
  const handleAgeFilterChange = (range: number | number[]): void => {
    setAgeFilterRange(range)
  }

  /**
   * Process event from Search component
   * @param value search text
   */
  const handleSearchStringChange = (value: string): void => {
    setSearchString(value)
  }

  /**
   * Process change event from Gender Filter
   * @param value gender
   */
  const handleGenderFilterChange = (value: string): void => {
    setGenderFilter(value)
  }

  /**
   * Process click on 'All' button
   */
  const handleAllButtonClick = (): void => {
    setAllButtonPressed(true)
    setDraftButtonPressed(false)
  }

  /**
   * Process click on 'Draft' button
   */
  const handleDraftButtonClick = (): void => {
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
  const handleCheckBoxFilterChange = (
    checked: boolean,
    value: string,
    checkedFilterList: string[],
    dispatch: React.Dispatch<React.SetStateAction<string[]>>
  ): void => {
    const indexToRemove = checkedFilterList.indexOf(value)
    if (checked) {
      if (value === 'all') {
        dispatch(['all'])
        return
      } else {
        dispatch((prevValue) =>
          prevValue.filter((value, i) => i !== checkedFilterList.indexOf('all'))
        )
      }
      dispatch((checkedFilterList) => [...checkedFilterList, value])
    } else {
      dispatch((prevValue) =>
        prevValue.filter((value, i) => i !== indexToRemove)
      )
    }
  }

  /**
   * Connect person with mentioned id
   * @param id person's id
   */
  const handleConnectCard = (id: number): void => {
    const newPersons = persons.map((person) => {
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
      primaryFilteringList = personList.filter((person) => person.isConnected)
    }
    return primaryFilteringList
      .filter((person) => {
        return searchString !== ''
          ? person.name.toLowerCase().includes(searchString.toLowerCase())
          : true
      })
      .filter((person) => {
        return person.age >= minAge && person.age <= maxAge
      })
      .filter((person) => {
        return person.gender?.toLowerCase() === genderFilter.toLowerCase()
      })
      .filter((person) => {
        return sportsFilterList.length === 0 || sportsFilterList.includes('all')
          ? true
          : sportsFilterList.includes(person.sport)
      })
      .filter((person) => {
        return countryFilterList.length === 0 ||
          countryFilterList.includes('all')
          ? true
          : countryFilterList.includes(person.country)
      })
  }

  return (
    <div className={theme}>
      <div className={'flex'}>
        <div style={{ flexDirection: 'column' }}>
          <ThemeSwitcher onChange={handleThemeChange} />
          <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
          <Filter
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
              handleCheckBoxFilterChange(
                checked,
                value,
                countryFilterList,
                setCountryFilterList
              )
            }
            onChangeShowCardGrid={(value) => setShowCardGrid(value)}
            onSportCheckBoxChange={(checked, value) =>
              handleCheckBoxFilterChange(
                checked,
                value,
                sportsFilterList,
                setSportsFilterList
              )
            }
            onSearchStringChange={handleSearchStringChange}
            onGenderFilterChange={handleGenderFilterChange}
            onAgeFilterChange={handleAgeFilterChange}
          />
        {isShowCardGird && (
          <CardsGrid
            personList={getFilteredPersons(personList)}
            onCardButtonClick={handleConnectCard}
          />
        )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
