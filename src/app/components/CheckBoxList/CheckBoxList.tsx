import * as React from 'react'
import { Box } from '@mui/material'
import CheckBoxComponent from '../CheckBoxComponent/CheckBoxComponent'

interface IProps {
  /**
   * List of Values
   */
  list: Array<{ label: string, value: string }>
  /**
   * List of Checked Values
   */
  checkedValuesList: string[]
}

interface IActions {
  /**
   * Click on CheckBox Action
   */
  onCheckBoxClick: (checked: boolean, value: string) => void
}

/**
 * CheckBox List Component
 */
const CheckBoxList = (props: IProps & IActions): JSX.Element => {
  return (
    <Box sx={{ overflow: 'auto', height: '10.25em' }}>
      <div key={'all'}>
        <CheckBoxComponent
          checked={props.checkedValuesList.includes('all')}
          label={'All'}
          key={'all'}
          value={'all'}
          onChange={(checked) => props.onCheckBoxClick(checked, 'all')}
        />
      </div>
      {props.list.map((item, index) => {
        return <CheckBoxComponent key={`checkBox${index}`}
                                  value={item.value}
                                  checked={props.checkedValuesList.includes(item.value)}
                                  label={item.label}
                                  onChange={(checked) => props.onCheckBoxClick(checked, item.value)}/>
      })}
    </Box>
  )
}

export default CheckBoxList
