import '../../style/style.css'
import React from 'react';
import Text from "../Text/Text";
import Button from '../Buttons/Button'
import Portrait from "./Portrait";
import {IThemed, IPerson} from "../../models/Models";
import {CountriesEn, Sports} from "../../data/selectsData";

interface IProps extends IThemed {
    person: IPerson
}

interface IActions {
    onButtonClick: () => void
}


const Card = (props: IProps & IActions): JSX.Element => {
    console.log(props.theme)
    return <div className={`person-card ${props.theme}`}>
        <Portrait/>
        <Text hideLongText={true} className={`person-text ${props.theme}`} value={props.person.name}/>
        <Text className={`person-text additional person-secondary ${props.theme}`} value={props.person.position}/>
        <Text className={`person-text additional person-secondary ${props.theme}`} value={CountriesEn.find(cnt => cnt.value === props.person.country)?.label ?? 'None'}/>
        <Text className={`person-text additional ${props.theme}`} value={Sports.find(sport => sport.value === props.person.sport)?.label ?? 'None'}/>
        <Button theme={props.theme} caption={'+ Connect'} onClick={props.onButtonClick}/>
    </div>
}

export default Card