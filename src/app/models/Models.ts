/**
 * Accordion Filter Model
 */
export interface IFilterAccordionModel {
  caption: string
  child: JSX.Element
}

/**
 * Demo Person Model
 */
export interface IPerson {
  id: number
  name: string
  position: string
  country: string
  sport: string
  portraitPath?: string
  isConnected?: boolean
  age: number
  gender: string
}
