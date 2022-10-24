import React from 'react'

interface IProps {
  /**
   * Button caption
   */
  caption: string
}

interface IActions {
  /**
   * On Button Click Action
   */
  onClick: () => void
}

/**
 * Button Component
 */
const Button = (props: IProps & IActions): JSX.Element => {
  return <button onClick={props.onClick}>{props.caption}</button>
}

export default Button
