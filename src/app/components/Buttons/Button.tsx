import React from 'react';
import '../../style/style.css'
import {IThemed} from "../../models/Models";

interface IProps extends IThemed {
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
    return <button className={`button ${props.theme} border ${props.theme}`}
                   onClick={props.onClick}>{props.caption}</button>
}

export default Button