import React from 'react';
import '../../style/style.css'
import {IThemed} from "../../models/Models";

interface IProps extends IThemed {
    caption: string
}

interface IActions {
    onClick: () => void
}

const Button = (props: IProps & IActions): JSX.Element => {
    return <button className={`button ${props.theme}`}
                   onClick={props.onClick}>{props.caption}</button>
}

export default Button