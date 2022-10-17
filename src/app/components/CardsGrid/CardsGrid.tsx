import * as React from 'react';
import Card from "../Card/Card";
import {IPerson, IThemed} from "../../models/Models";

interface IProps extends IThemed {
    personList: IPerson[]
}

interface IActions {
    //onCardButtonClick: (inedx: number) => void
}

const handleButtonClick = (index: number) => {
    console.log(index)
}

const CardsGrid = (props: IProps & IActions) => {
    return <div className={'cards-grid'}>
        {props.personList.map((person, index) => {
            return <Card theme={props.theme}
                         person={person}
                         onButtonClick={() => handleButtonClick(index)}/>
        })}
    </div>
}

export default CardsGrid