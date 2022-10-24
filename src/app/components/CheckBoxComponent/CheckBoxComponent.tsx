import React, { useContext } from 'react'
import './_checkBoxComponent.scss'
import { ThemeContext } from '../ThemeProvider/ThemeProvider'

interface IProps {
  value: string
  checked: boolean
  label: string
}

interface IActions {
  onChange: (value: boolean) => void
}

const CheckBoxComponent = (props: IProps & IActions): JSX.Element => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`checkbox ${theme}`}>
      <label className="container">
        {props.label}
        <input
          value={props.value}
          checked={props.checked}
          className={`${theme}`}
          type={'checkbox'}
          onChange={(e) => props.onChange(e.target.checked)}
        />
        <span className={`checkmark ${theme}`}></span>
      </label>
    </div>
  )
}

export default CheckBoxComponent
