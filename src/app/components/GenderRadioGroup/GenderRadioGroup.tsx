import * as React from 'react';
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {Gender} from "../../data/selectsData";

interface IProps {
    value: string
}

interface IActions {
    onChange: (text: string) => void
}

const GenderRadioGroup = (props: IProps & IActions) => {
    return <div style={{flex: 1}}>
        <RadioGroup
            value={props.value ?? ''}
            defaultValue="male"
            onChange={(_, value) => props.onChange(value)}
            name="radio-buttons-group">{Gender.map(genderInfo => {
            return <FormControlLabel key={genderInfo.value}
                                     value={genderInfo.value}
                                     control={<Radio/>}
                                     label={genderInfo.label}/>
        })}
        </RadioGroup></div>
}

export default GenderRadioGroup

export const MemoizedGenderRadioGroup = React.memo(GenderRadioGroup);