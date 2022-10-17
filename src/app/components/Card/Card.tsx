import '../../style/style.css'
import React from 'react';
import Text from "../Text/Text";
import Button from '../Button/Button'
import Portrait from "./Portrait";
import {IThemed, IPerson} from "../../models/Models";

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
        <Text className={`person-text additional person-secondary ${props.theme}`} value={props.person.country}/>
        <Text className={`person-text additional ${props.theme}`} value={props.person.sport}/>
        <Button theme={props.theme} caption={'+ Connect'} onClick={props.onButtonClick}/>
    </div>
}

export default Card