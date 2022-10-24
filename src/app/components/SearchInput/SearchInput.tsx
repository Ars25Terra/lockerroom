import * as React from 'react'

interface IProps {
  /**
   * Current value
   */
  value: string
  /**
   * Input type
   */
  type?: string
}

interface IActions {
  /**
   * On Change Text Action
   */
  onChange: (text: string) => void
  /**
   * On loosing focus action
   */
  onBlur?: () => void
}

const SearchInput = (props: IProps & IActions): JSX.Element => {
  return (
    <input
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      onBlur={props.onBlur}
      type={props.type}
    />
  )
}

export default SearchInput
