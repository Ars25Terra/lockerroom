import * as React from 'react'
import Card from '../Card/Card'
import { IPerson } from '../../models/Models'
import './_cardsGrid.scss'

interface IProps {
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
const CardsGrid = (props: IProps & IActions): JSX.Element => {
  return (
<div className={'grid'}>
          {props.personList.map((person, index) => {
            return (

                   <Card
                    key={`personCard${index}`}
                    person={person}
                    onButtonClick={() => props.onCardButtonClick(person.id)}
                    />
            )
          })}
</div>
  )
}

export default CardsGrid
