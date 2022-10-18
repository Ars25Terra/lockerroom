import * as React from 'react';
import SearchInput from "../SearchInput/SearchInput";
import Text from "../Text/Text";
import FilterAccordion from "../FilterAccordion/FilterAccordion";
import GenderRadioGroup from "../GenderRadioGroup/GenderRadioGroup";
import AgeSelector from "../AgeSelector/AgeSelector";
import CheckBoxList from "../CheckBoxList/CheckBoxList";
import {CountriesEn, Sports} from "../../data/selectsData";
import {FilterAlt as FilterIcon} from "@mui/icons-material";
import {IFilterAccordionModel, IThemed} from "../../models/Models";
import FilterButton from "../Buttons/FilterButton";
import {useMemo} from "react";

interface IProps extends IThemed {
    ageFilterRange: number|number[]
    searchString: string
    genderFilter: string
    selectedSportsList: string[]
    selectedCountriesList: string[]
}

interface IActions {
    onAgeFilterChange: (range: number|number[]) => void
    onSearchStringChange: (value: string) => void
    onGenderFilterChange: (value: string) => void
    onSportCheckBoxChange: (checked: boolean, value: string) => void
    onCountryCheckBoxChange: (checked: boolean, value: string) => void
}

const Filter = (props: IProps & IActions): JSX.Element => {

    const sportsCheckBoxList = useMemo(() => CheckBoxList(
        { list: Sports,
                checkedIndexesList: props.selectedSportsList,
                onCheckBoxClick: props.onSportCheckBoxChange }),
        // eslint-disable-next-line
        [props.selectedSportsList])

    const countriesCheckBoxList = useMemo(() => CheckBoxList(
            { list: CountriesEn,
                checkedIndexesList: props.selectedCountriesList,
                onCheckBoxClick: props.onCountryCheckBoxChange }),
        // eslint-disable-next-line
        [props.selectedCountriesList])

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
        <div className={`filter-panel ${props.theme}`}>
            <SearchInput value={props.searchString}
                         //onBlur={() => props.onSearchStringChange(props.searchString)}
                         onChange={props.onSearchStringChange}
                         className={`search-input ${props.theme}`}/>
            <Text value={'FILTER'} className={`filter-text ${props.theme}`}/>
            <div className={'filter-buttons-panel'}>
                <FilterButton caption={'ALL'} onClick={() => {}} theme={props.theme}/>
                <FilterButton caption={'DRAFT'} onClick={() => {}} theme={props.theme}/>
            </div>
            {filters.map((filter, index) => {
                return <FilterAccordion id={`filter${index}`} key={`filter${index}`} model={filter}/>
            })}
        </div>
        <hr/>
        <div className={'filter-mobile'}>
            <Text value={'FILTER'} className={`person-text ${props.theme}`}/>
            <FilterIcon onClick={() => {}}/>
        </div>
        <hr/>
    </>
}

export default Filter