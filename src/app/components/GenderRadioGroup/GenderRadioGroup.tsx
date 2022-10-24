import * as React from 'react'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { Gender } from '../../data/selectsData'

interface IProps {
  /**
   * Current value
   */
  value: string
}

interface IActions {
  /**
   * On change current value action
   */
  onChange: (text: string) => void
}

/**
 * Gender Radio Group Component
 */
const GenderRadioGroup = (props: IProps & IActions): JSX.Element => {
  return (
    <div style={{ flex: 1 }}>
      <RadioGroup
        value={props.value ?? ''}
        defaultValue="male"
        onChange={(_, value) => props.onChange(value)}
        name="gender-radio-group"
      >
        {Gender.map((genderInfo) => {
          return (
            <FormControlLabel
              key={genderInfo.value}
              value={genderInfo.value}
              control={<Radio />}
              label={genderInfo.label}
            />
          )
        })}
      </RadioGroup>
    </div>
  )
}

export default GenderRadioGroup
