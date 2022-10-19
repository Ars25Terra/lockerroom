import * as React from 'react';

interface IProps {
    /**
     * Text value
     */
    value: string
    /**
     * CSS Class Name
     */
    className: string
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
        return props.hideLongText && props.value.length > 30
            ? `${props.value.substring(0,26)}...`
            : props.value
    }
    return <div className={props.className}>{value()}</div>
}

export default Text