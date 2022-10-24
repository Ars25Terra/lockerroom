import * as React from 'react'
import Slider from '@mui/material/Slider'
import SearchInput from '../SearchInput/SearchInput'

interface IProps {
  /**
   * Age range
   */
  range: number | number[]
}

interface IActions {
  /**
   * On Changes in age range action
   */
  onChangeRange: (newRange: number | number[]) => void
}

/**
 * Age Selector Component
 */
const AgeSelector = (props: IProps & IActions): JSX.Element => {
  /**
   * onChange event of Age Selector value input
   * @param text value
   * @param selectorNumber number of age in range (0, 1)
   */
  const onChange = (text: string, selectorNumber: number): void => {
    const number = parseInt(text)
    if (!isNaN(number)) {
      const tempRange = (props.range as number[]).slice()
      tempRange[selectorNumber] = number
      props.onChangeRange(tempRange)
    }
  }
  return (
    <div>
      <SearchInput
        value={(props.range as number[])[0].toString()}
        onChange={(text) => onChange(text, 0)}
      />
      <Slider
        sx={{
          width: '10.5em',
          color: 'silver',
          marginLeft: '0.8em',
          marginRight: '0.8em',
          background: 'transparent'
        }}
        value={props.range}
        size={'small'}
        onChange={(_, value) => props.onChangeRange(value)}
        valueLabelDisplay="on"
      />
      <SearchInput
        value={(props.range as number[])[1].toString()}
        onChange={(text) => onChange(text, 1)}
      />
    </div>
  )
}

export default AgeSelector
