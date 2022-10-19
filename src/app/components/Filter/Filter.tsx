import * as React from 'react';
import SearchInput from "../SearchInput/SearchInput";
import Text from "../Text/Text";
import FilterAccordion from "../FilterAccordion/FilterAccordion";
import GenderRadioGroup from "../GenderRadioGroup/GenderRadioGroup";
import AgeSelector from "../AgeSelector/AgeSelector";
import CheckBoxList from "../CheckBoxList/CheckBoxList";
import {CountriesEn, Sports} from "../../data/selectsData";
import {FilterAlt as FilterIcon} from "@mui/icons-material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {IFilterAccordionModel, IThemed} from "../../models/Models";
import FilterButton from "../Buttons/FilterButton";
import {useMemo, useState} from "react";

interface IProps extends IThemed {
    ageFilterRange: number|number[]
    searchString: string
    genderFilter: string
    selectedSportsList: string[]
    selectedCountriesList: string[]
    isAllButtonPressed: boolean
    isDraftButtonPressed: boolean
}

interface IActions {
    onAgeFilterChange: (range: number|number[]) => void
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

    /**
     * State for filter panel CSS class name
     */
    const [filterPanelClass, setFilterPanelClass] = useState<string>('filter-panel')
    const [filterMobilePanelClass, setFilterMobilePanelClass] = useState<string>('filter-mobile')

    /**
     * Memoizing large lists for better performance - Sport Type Checkbox List
     */
    const sportsCheckBoxList = useMemo(() => CheckBoxList(
        { list: Sports,
                checkedValuesList: props.selectedSportsList,
                onCheckBoxClick: props.onSportCheckBoxChange }),
        // eslint-disable-next-line
        [props.selectedSportsList])

    /**
     * Memoizing large lists for better performance - Countries Checkbox list
     */
    const countriesCheckBoxList = useMemo(() => CheckBoxList(
            { list: CountriesEn,
                checkedValuesList: props.selectedCountriesList,
                onCheckBoxClick: props.onCountryCheckBoxChange }),
        // eslint-disable-next-line
        [props.selectedCountriesList])

    /**
     * Filters are added here
     */
    const filters: IFilterAccordionModel[] = [
        {caption: 'Gender', child: <GenderRadioGroup
                                             value={props.genderFilter}
                                             onChange={props.onGenderFilterChange}/>},
        {caption: 'Age', child: <AgeSelector onChangeRange={props.onAgeFilterChange}
                                             range={props.ageFilterRange}
                                             theme={props.theme}/>},
        {caption: 'Sport', child: sportsCheckBoxList},
        {caption: 'Country', child: countriesCheckBoxList},
    ]

    return <>
        <div className={`${filterPanelClass} ${props.theme}`}>
            <SearchInput value={props.searchString}
                         onChange={props.onSearchStringChange}
                         className={`search-input ${props.theme}`}/>
            <div className={'filter-text-container'}>
                <Text value={'FILTER'} className={`filter-text ${props.theme}`}/>
                <div className={`close-button filter-text ${props.theme}`}>
                    <HighlightOffIcon onClick={(_) => {
                        setFilterPanelClass('filter-panel')
                        setFilterMobilePanelClass('filter-mobile show')
                        props.onChangeShowCardGrid(true)
                    }}/>
                </div>
            </div>
            <div className={'filter-buttons-panel'}>
                <FilterButton isPressed={props.isAllButtonPressed} caption={'ALL'} onClick={props.onAllButtonClick} theme={props.theme}/>
                <FilterButton isPressed={props.isDraftButtonPressed} caption={'DRAFT'} onClick={props.onDraftButtonClick} theme={props.theme}/>
            </div>
            {filters.map((filter, index) => {
                return <FilterAccordion id={`filter${index}`} key={`filter${index}`} model={filter}/>
            })}
        </div>
        {filterMobilePanelClass !== 'filter-mobile hide' && <div>
            <hr className={`${props.theme} line`}/>
            <div className={filterMobilePanelClass}>
                <Text value={'FILTER'} className={`filter-text mobile ${props.theme}`}/>
                <FilterIcon className={`filter-text filter-icon mobile ${props.theme}`}
                            onClick={(_) => {
                                setFilterPanelClass('filter-panel show')
                                setFilterMobilePanelClass('filter-mobile hide')
                                props.onChangeShowCardGrid(false)
                            }}/>
            </div>
            <hr className={`${props.theme} line`}/>
        </div>}
    </>
}

export default Filter