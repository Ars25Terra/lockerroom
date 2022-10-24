import React from 'react'

interface IProps {
  /**
   * Button Caption
   */
  caption: string
  /**
   * Is it pressed?
   */
  isPressed: boolean
}

interface IActions {
  /**
   * On Click Event action
   */
  onClick: () => void
}

/**
 * Filter Button Component
 */
const FilterButton = (props: IProps & IActions): JSX.Element => {
  return <button onClick={props.onClick}>{props.caption}</button>
}

export default FilterButton
