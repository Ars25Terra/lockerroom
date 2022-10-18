import * as React from 'react';

interface IProps {
    className: string
    value: string
    type?: string
}

interface IActions {
    onChange: (text: string) => void
    onBlur?: () => void
}

const SearchInput = (props: IProps & IActions): JSX.Element => {
    return <input value={props.value}
                  onChange={(e) => props.onChange(e.target.value)}
                  onBlur={props.onBlur}
                  type={props.type}
                  className={props.className}/>
}

export default SearchInput