import * as React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {ExpandCircleDown} from "@mui/icons-material";
import {IFilterAccordionModel} from "../../models/Models";

interface IProps {
    id: string
    model: IFilterAccordionModel
}

interface IActions {

}

const FilterAccordion = (props: IProps & IActions): JSX.Element => {
    return <Accordion
            key={props.id}
            id={props.id}
            disableGutters
            elevation={0}
            square={true}>
        <AccordionSummary
            expandIcon={<ExpandCircleDown/>}>
            <Typography>{props.model.caption}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {props.model.child ?? <div/>}
        </AccordionDetails>
    </Accordion>
}

export default FilterAccordion