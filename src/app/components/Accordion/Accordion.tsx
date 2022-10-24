import React, { useContext, useState } from 'react'
import './_accordion.scss'
import { ThemeContext } from '../ThemeProvider/ThemeProvider'

interface IProps {
  title: string
  content: JSX.Element
}

const Accordion = (props: IProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false)
  const { theme } = useContext(ThemeContext)
  return (
        <li className={'accordion-item'}>
            <hr style={{ height: '1px', opacity: '0.5' }}/>
            <div className={`accordion-toggle ${theme}`} onClick={() => setIsActive(!isActive)}>
                <h1>{props.title?.toUpperCase()}</h1><span>{isActive ? '-' : '+'}</span>
            </div>
            {isActive && <div className="accordion-content">{props.content}</div>}
        </li>
  )
}

export default Accordion
