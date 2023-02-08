import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { ColorModeContext } from '../../context/ColorModeContext';
import Modal from '../utilities/Modal';
import WrapperButton from '../utilities/WrapperButton';
import classes from './Cart.module.css';
import CartItem from './CartItem';
const Cart = ({onClose,onShowFinal}) => {
    const {itemsCart,updateAmount,removeItem,removeAll} = useContext(CartContext);
    const listItemsCart = itemsCart.items.map((item)=>(
        <CartItem
        key={item.name}
        name={item.name}
        price={item.price}
        img={item.img}
        amount={item.amount}
        updateAmount={updateAmount}
        removeItem={removeItem}/>
    ));
    const showFinalModalHandler = () =>{
        onClose();
        removeAll();
        onShowFinal();
    }
    const {isDarkMode} = useContext(ColorModeContext);
  return (
    <Modal onClose={onClose} isDarkMode={isDarkMode}>
        <div className={classes.header}>
         <p>Carrito</p>
         <button onClick={removeAll}>Vaciar Carrito</button>
        </div>
        <ul className={classes.cartList}>
            {
                itemsCart.items.length ? (
                    listItemsCart
                ) : (
                  <p className={classes.noItems}>No hay ningun item</p>
                )
            }
        </ul>
        {
            itemsCart.items.length ? (
                <div className={classes.total}>
                    <p>
                        SubTotal: <span>S/. {Number(itemsCart.total).toFixed(2)}</span>
                    </p>
                    <WrapperButton onClick={showFinalModalHandler}>
                        Finalizar Compra
                    </WrapperButton>
                </div>
            ):(
                ""
            )
        }
    </Modal>
  )
}

export default Cart