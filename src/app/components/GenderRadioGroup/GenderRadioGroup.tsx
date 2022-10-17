import * as React from 'react';
import {FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {Gender} from "../../data/selectsData";

const GenderRadioGroup = () => {
    return <div style={{flex: 1}}>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group">{Gender.map(genderInfo => {
            return <FormControlLabel key={genderInfo.value}
                                     value={genderInfo.value}
                                     control={<Radio/>}
                                     label={genderInfo.label}/>
        })}
        </RadioGroup></div>
}

export default GenderRadioGroup