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

interface IProps extends IThemed {

}

const Filter = (props: IProps): JSX.Element => {

    const filters: IFilterAccordionModel[] = [
        {caption: 'Gender', child: <GenderRadioGroup/>},
        {caption: 'Age', child: <AgeSelector/>},
        {caption: 'Sport', child: <CheckBoxList list={Sports}/>},
        {caption: 'Country', child: <CheckBoxList list={CountriesEn}/>},
    ]

    return <>
        <div className={`filter-panel ${props.theme}`}>
            <SearchInput/>
            <Text value={'FILTER'} className={`filter-text ${props.theme}`}/>
            {filters.map((filter, index) => {
                return <FilterAccordion id={`filter${index}`} key={`filter${index}`} model={filter}/>
            })}
        </div>
        <div className={'filter-mobile'}>
            <Text value={'FILTER'} className={`person-text ${props.theme}`}/>
            <FilterIcon/>
        </div>
    </>
}

export default Filter