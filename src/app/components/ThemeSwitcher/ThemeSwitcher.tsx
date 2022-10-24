import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import Text from '../Text/Text'
import * as React from 'react'

interface IActions {
  /**
   * On Change Theme Action
   */
  onChange: (value: string) => void
}

/**
 * Theme Switcher Component
 */
const ThemeSwitcher = (props: IActions): JSX.Element => {
  return (
    <div>
      <Text value={'THEME'} />
      <RadioGroup row={true} onChange={(_, value) => props.onChange(value)}>
        <FormControlLabel
          value="light"
          control={<Radio color={'primary'} size={'small'} />}
          label="Light"
        />
        <FormControlLabel
          value="dark"
          control={<Radio color={'primary'} size={'small'} />}
          label="Dark"
        />
      </RadioGroup>
    </div>
  )
}

export default ThemeSwitcher
