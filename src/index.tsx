import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './app/styles/_styles.scss'
import reportWebVitals from './reportWebVitals'
import ThemeProvider from './app/components/ThemeProvider/ThemeProvider'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
reportWebVitals()
