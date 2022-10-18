export interface IThemed {
    theme: string
}

export interface IFilterAccordionModel {
    caption: string
    child: JSX.Element
}

export interface IPerson {
    name: string
    position: string
    country: string
    sport: string
    portraitPath?: string
    isConnected?: boolean
    age: number
    gender: string
}