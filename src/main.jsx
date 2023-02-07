import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FilterContextProvider from './context/FilterContext'
import AlertContextProvider from './context/AlertContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FilterContextProvider>
      <AlertContextProvider>
        <App />
      </AlertContextProvider>
    </FilterContextProvider>
  </React.StrictMode>,
)
