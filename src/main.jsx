import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FilterContextProvider from './context/FilterContext'
import AlertContextProvider from './context/AlertContext'
import CartContextProvider from './context/CartContext'
import ColorModeContextProvider from './context/ColorModeContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FilterContextProvider>
      <CartContextProvider>
        <ColorModeContextProvider>
          <AlertContextProvider>
            <App />
          </AlertContextProvider>
        </ColorModeContextProvider>
      </CartContextProvider>
    </FilterContextProvider>
  </React.StrictMode>,
)
