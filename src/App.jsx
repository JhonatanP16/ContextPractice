import { useContext, useState } from 'react';
import './app.css'
import Header from './components/layouts/Header'
import Products from './components/layouts/products/Products'
import { AlertContext } from './context/AlertContext';
import Alert from './components/alert/Alert';
import { ColorModeContext } from './context/ColorModeContext';
import Cart from './components/cart/Cart';
import PurchaseSuccess from './components/cart/PurchaseSuccess/PurchaseSuccess'
import Footer from './components/layouts/Footer';
function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [purchaseFinishedModal, setPurchaseFinishedModal] = useState(false);
  const {isDarkMode} = useContext(ColorModeContext);
  const { alertIsShown, alertContent } = useContext(AlertContext);
  const closeCartHandler = () => {
    setIsCartVisible(false);
  };
  const showCartHandler = () => {
    setIsCartVisible(true);
  };
  const closeFinalModalHandler = () => {
    setPurchaseFinishedModal(false);
  };
  const showFinalModalHandler = () => {
    setPurchaseFinishedModal(true);
  };
  return (
    <>
    <Alert alertIsShown={alertIsShown} content={alertContent} />
    <div className={`app ${isDarkMode ? 'darkMode' : ''}`}>
      {
        isCartVisible && (
          <Cart
          onClose={closeCartHandler}
          onShowFinal={showFinalModalHandler}
          />
        )
      }
      {
        purchaseFinishedModal && (
          <PurchaseSuccess onClose={closeFinalModalHandler} />
        )
      }
      <Header onShow={showCartHandler}/>
      <Products/>
      <Footer/>
    </div>
    </>
    
  )
}

export default App
