import '../../style/style.css'
import React from 'react';
import Text from "../Text/Text";
import Button from '../Buttons/Button'
import Portrait from "./Portrait";
import {IThemed, IPerson} from "../../models/Models";
import {CountriesEn, Sports} from "../../data/selectsData";

interface IProps extends IThemed {
    /**
     * Person Object
     */
    person: IPerson
}

interface IActions {
    /**
     * On Connect Button click action
     */
    onButtonClick: () => void
}

/**
 * Person Card Component
 */
const Card = (props: IProps & IActions): JSX.Element => {
    return <div className={`person-card ${props.theme}`}>
        <Portrait/>
        <Text hideLongText={true} className={`person-text ${props.theme}`} value={props.person.name}/>
        <Text className={`person-text additional person-secondary ${props.theme}`} value={props.person.position}/>
        <Text className={`person-text additional person-secondary ${props.theme}`} value={CountriesEn.find(cnt => cnt.value === props.person.country)?.label ?? 'None'}/>
        <Text className={`person-text additional ${props.theme}`} value={Sports.find(sport => sport.value === props.person.sport)?.label ?? 'None'}/>
        <Button theme={props.theme}
                caption={!props.person.isConnected ? `+ Connect` : `Message`}
                onClick={props.onButtonClick}/>
    </div>
}

export default Card