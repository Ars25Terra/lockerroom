import React from 'react';
import '../../style/style.css'
import {IThemed} from "../../models/Models";

interface IProps extends IThemed {
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
    return <button className={`filter-button ${!props.isPressed ? 'unpressed ' : ''}${props.theme}`}
                   onClick={props.onClick}>{props.caption}</button>
}

export default FilterButton