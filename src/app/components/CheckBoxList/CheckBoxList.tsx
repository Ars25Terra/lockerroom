import * as React from 'react';
import {Box, Checkbox, FormControlLabel} from "@mui/material";

interface IProps {
    list: { label: string, value: string }[]
    checkedIndexesList: string[]
}

interface IActions {
    onCheckBoxClick: (checked: boolean, value: string) => void
}

const CheckBoxList = (props: IProps & IActions) => {
    return <Box sx={{overflow: 'auto', height: '10.25em'}}>
        <div key={'all'}>
            <FormControlLabel control={<Checkbox key={'all'}
                                                 value={'all'}/>}
                                                 onChange={(_, checked) => props.onCheckBoxClick(checked, 'all')}
                                                 checked={props.checkedIndexesList.includes('all')}
                                                 label={'All'}/>
        </div>
        {props.list.map((item, index) => {
            return <div key={index}>
                <FormControlLabel control={<Checkbox key={`checkBox${index}`}
                                                     value={item.value}/>}
                                                     checked={props.checkedIndexesList.includes(item.value)}
                                                     onChange={(_, checked) => props.onCheckBoxClick(checked, item.value)}
                                                     label={item.label}/>
            </div>
        })}
    </Box>
}

export default CheckBoxList
export const MemoizedCheckBoxList = React.memo(CheckBoxList);