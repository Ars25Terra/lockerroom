import * as React from 'react';
import Slider from '@mui/material/Slider';

import SearchInput from "../SearchInput/SearchInput";
import {IThemed} from "../../models/Models";

interface IProps extends IThemed {
    range: number|number[]
}

interface IActions {
    onChangeRange: (newRange: number|number[]) => void
}

const AgeSelector = (props: IProps & IActions): JSX.Element => {
    return <div className={`age-selector ${props.theme}`}>
        <SearchInput value={(props.range as number[])[0].toString()}
                     onChange={(text) => {
                         const number = parseInt(text)
                         if (!isNaN(number) && number <= (props.range as number[])[1]) {
                             const tempRange = (props.range as number[]).slice()
                             tempRange[0] = number
                             props.onChangeRange(tempRange)
                         }
                     }}
                     className={`age-selector ${props.theme} text-input border`}/>
            <Slider
                sx={{
                    width: '10.5em',
                    color: 'silver',
                    marginLeft: '0.8em',
                    marginRight: '0.8em',
                    background: 'transparent'
                }}
                value={props.range}
                size={'small'}
                onChange={(_, value) => props.onChangeRange(value)}
                valueLabelDisplay="on"
            />
        <SearchInput value={(props.range as number[])[1].toString()}
                     onChange={(text) => {}}
                     className={`age-selector text-input age-selector ${props.theme} border ${props.theme}`}/>
    </div>
}

export default AgeSelector