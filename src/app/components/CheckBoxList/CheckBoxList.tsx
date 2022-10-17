import * as React from 'react';
import {Box, Checkbox, FormControlLabel} from "@mui/material";

interface IProps {
    list: { label: string, value: string }[]
}

const CheckBoxList = (props: IProps) => {
    return <Box sx={{overflow: 'auto', height: '10.25em'}}>
        <div key={'all'}>
            <FormControlLabel control={<Checkbox key={'all'}
                                                 value={'all'}/>}
                                                 label={'All'}/>
        </div>
        {props.list.map((item, index) => {
            return <div key={index}>
                <FormControlLabel control={<Checkbox key={`checkBox${index}`}
                                                     value={item.value}/>}
                                                     label={item.label}/>
            </div>
        })}
    </Box>
}

export default CheckBoxList