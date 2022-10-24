import './Card.scss'
import React, { useContext } from 'react'
import Button from '../Buttons/Button'
import Portrait from './Portrait'
import { IPerson } from '../../models/Models'
import { CountriesEn, Sports } from '../../data/selectsData'
import { ThemeContext } from '../ThemeProvider/ThemeProvider'

interface IProps {
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
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`Card ${theme}`}>
      <Portrait />
        <h1>{props.person.name}</h1>
      <h2>{props.person.position}</h2>
      <h2>
        {CountriesEn.find((cnt) => cnt.value === props.person.country)?.label ??
          'None'}
      </h2>
      <h3>
        {Sports.find((sport) => sport.value === props.person.sport)?.label ??
          'None'}
      </h3>
      <Button
        caption={props.person.isConnected === false ? '+ Connect' : 'Message'}
        onClick={props.onButtonClick}
      />
    </div>
  )
}

export default Card
