import * as React from 'react'
// import { ExpandCircleDown } from '@mui/icons-material'
import { IFilterAccordionModel } from '../../models/Models'
import Accordion from '../Accordion/Accordion'

interface IProps {
  id: string
  /**
   * Accordion model to render
   */
  model: IFilterAccordionModel
}

/**
 * Filter Accordion Component
 */
const FilterAccordion = (props: IProps): JSX.Element => {
  return (
    <Accordion content={props.model.child} title={props.model.caption}/>
  )
}

export default FilterAccordion
