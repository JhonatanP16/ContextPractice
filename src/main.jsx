import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FilterContextProvider from './context/FilterContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </React.StrictMode>,
)
