import * as React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {ExpandCircleDown} from "@mui/icons-material";
import {IFilterAccordionModel} from "../../models/Models";
import {useState} from "react";

interface IProps {
    id: string
    model: IFilterAccordionModel
}

interface IActions {

}

const FilterAccordion = (props: IProps & IActions): JSX.Element => {

    const [isExpanded, setExpanded] = useState<boolean>(false)

    return <Accordion
            expanded={isExpanded}
            key={props.id}
            id={props.id}
            disableGutters
            elevation={0}
            square={true}>
        <AccordionSummary
            onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setExpanded(!isExpanded)
            }}
            expandIcon={<ExpandCircleDown/>}>
            <Typography>{props.model.caption}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {isExpanded && props.model.child}
        </AccordionDetails>
    </Accordion>
}

export default FilterAccordion