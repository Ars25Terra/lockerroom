import * as React from 'react';

interface IProps {
    value: string
    className: string
    hideLongText?: boolean
}

const Text = (props: IProps): JSX.Element => {
    const value = (): string => {
        return props.hideLongText && props.value.length > 30
            ? `${props.value.substring(0,26)}...`
            : props.value
    }
    return <div className={props.className}>{value()}</div>
}

export default Text