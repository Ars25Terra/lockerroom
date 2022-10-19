import * as React from 'react';
import Card from "../Card/Card";
import {IPerson, IThemed} from "../../models/Models";

interface IProps extends IThemed {
    /**
     * List of Persons
     */
    personList: IPerson[]
}

interface IActions {
    /**
     * On click card button action
     */
    onCardButtonClick: (id: number) => void
}

/**
 * Persons Cards Grid Component
 */
const CardsGrid = (props: IProps & IActions) => {
    return <div className={'cards-grid'}>
        {props.personList.map((person, index) => {
            return <Card theme={props.theme}
                         key={`personCard${index}`}
                         person={person}
                         onButtonClick={() => props.onCardButtonClick(person.id)}/>
        })}
    </div>
}

export default CardsGrid