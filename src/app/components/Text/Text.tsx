import * as React from 'react'

interface IProps {
  /**
   * Text value
   */
  value: string
  /**
   * Flag if the long value should be cut, last symbols replaced with "..."
   */
  hideLongText?: boolean
}

/**
 * Text Rendering Componennt
 */
const Text = (props: IProps): JSX.Element => {
  const value = (): string => {
    return (props.hideLongText ?? false) && props.value.length > 30
      ? `${props.value.substring(0, 26)}...`
      : props.value
  }
  return <div>{value()}</div>
}

export default Text
