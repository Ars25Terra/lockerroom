import * as React from 'react';

interface IProps {
    additionalClassName?: string
}

const SearchInput = (props: IProps): JSX.Element => {
    return <input type={'search'} className={`search-input ${props.additionalClassName}`}/>
}

export default SearchInput