import * as React from 'react'
import SearchInput from '../SearchInput/SearchInput'
import Text from '../Text/Text'
import FilterAccordion from '../FilterAccordion/FilterAccordion'
import GenderRadioGroup from '../GenderRadioGroup/GenderRadioGroup'
import AgeSelector from '../AgeSelector/AgeSelector'
import CheckBoxList from '../CheckBoxList/CheckBoxList'
import { CountriesEn, Sports } from '../../data/selectsData'
// import { FilterAlt as FilterIcon } from '@mui/icons-material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import { IFilterAccordionModel } from '../../models/Models'
import FilterButton from '../Buttons/FilterButton'
import { useContext, useMemo } from 'react'
import './_filter.scss'
import { ThemeContext } from '../ThemeProvider/ThemeProvider'

interface IProps {
  ageFilterRange: number | number[]
  searchString: string
  genderFilter: string
  selectedSportsList: string[]
  selectedCountriesList: string[]
  isAllButtonPressed: boolean
  isDraftButtonPressed: boolean
}

interface IActions {
  onAgeFilterChange: (range: number | number[]) => void
  onSearchStringChange: (value: string) => void
  onGenderFilterChange: (value: string) => void
  onSportCheckBoxChange: (checked: boolean, value: string) => void
  onCountryCheckBoxChange: (checked: boolean, value: string) => void
  onChangeShowCardGrid: (value: boolean) => void
  onAllButtonClick: () => void
  onDraftButtonClick: () => void
}

/**
 * Filter Component
 */
const Filter = (props: IProps & IActions): JSX.Element => {
  // const [filterMobilePanelClass, setFilterMobilePanelClass] =
  //   useState<string>('filter-mobile')
  /**
   * Memorizing large lists for better performance - Sport Type Checkbox List
   */
  const sportsCheckBoxList = useMemo(
    () =>
      CheckBoxList({
        list: Sports,
        checkedValuesList: props.selectedSportsList,
        onCheckBoxClick: props.onSportCheckBoxChange
      }),
    // eslint-disable-next-line
    [props.selectedSportsList]
  )

  /**
   * Memorizing large lists for better performance - Countries Checkbox list
   */
  const countriesCheckBoxList = useMemo(
    () =>
      CheckBoxList({
        list: CountriesEn,
        checkedValuesList: props.selectedCountriesList,
        onCheckBoxClick: props.onCountryCheckBoxChange
      }),
    // eslint-disable-next-line
    [props.selectedCountriesList]
  )

  /**
   * Filters are added here
   */
  const filters: IFilterAccordionModel[] = [
    {
      caption: 'Gender',
      child: (
        <GenderRadioGroup
          value={props.genderFilter}
          onChange={props.onGenderFilterChange}
        />
      )
    },
    {
      caption: 'Age',
      child: (
        <AgeSelector
          onChangeRange={props.onAgeFilterChange}
          range={props.ageFilterRange}
        />
      )
    },
    { caption: 'Sport', child: sportsCheckBoxList },
    { caption: 'Country', child: countriesCheckBoxList }
  ]

  const { theme } = useContext(ThemeContext)

  return (
    <>
      <div className={`filter ${theme}`}>
        <SearchInput
          value={props.searchString}
          onChange={props.onSearchStringChange}
        />
        <div>
          <Text value={'FILTER'} />
          <div>
            <HighlightOffIcon
              onClick={(_) => {
                // setFilterPanelClass('filter-panel')
              // setFilterMobilePanelClass('filter-mobile show')
                props.onChangeShowCardGrid(true)
              }}
            />
          </div>
        </div>
        <div className={'filter-buttons-panel'}>
          <FilterButton
            isPressed={props.isAllButtonPressed}
            caption={'ALL'}
            onClick={props.onAllButtonClick}
          />
          <FilterButton
            isPressed={props.isDraftButtonPressed}
            caption={'DRAFT'}
            onClick={props.onDraftButtonClick}
          />
        </div>
        {filters.map((filter, index) => {
          return (
            <FilterAccordion
              id={`filter${index}`}
              key={`filter${index}`}
              model={filter}
            />
          )
        })}
      </div>
      {/* {filterMobilePanelClass !== 'filter-mobile hide' && ( */}
      {/*  <div> */}
      {/*    <hr /> */}
      {/*    <div className={filterMobilePanelClass}> */}
      {/*      <Text value={'FILTER'} /> */}
      {/*      <FilterIcon */}
      {/*        onClick={(_) => { */}
      {/*          // setFilterPanelClass('filter-panel show') */}
      {/*          setFilterMobilePanelClass('filter-mobile hide') */}
      {/*          props.onChangeShowCardGrid(false) */}
      {/*        }} */}
      {/*      /> */}
      {/*    </div> */}
      {/*    <hr /> */}
      {/*  </div> */}
      {/* )} */}
    </>
  )
}

export default Filter
