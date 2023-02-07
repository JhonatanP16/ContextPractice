import { useContext } from 'react';
import './app.css'
import Header from './components/layouts/Header'
import Products from './components/layouts/products/Products'
import { AlertContext } from './context/AlertContext';
import Alert from './components/alert/Alert';
function App() {
 
  const { alertIsShown, alertContent } = useContext(AlertContext);
  return (
    <>
    <Alert alertIsShown={alertIsShown} content={alertContent} />
    <div className='app'>
      <Header/>
      <Products/>
    </div>
    </>
    
  )
}

export default App
