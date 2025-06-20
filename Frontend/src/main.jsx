import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeContextProvider } from '../context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
  // </StrictMode>,
)
