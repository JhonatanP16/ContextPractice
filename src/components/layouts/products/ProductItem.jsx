import React, { useContext, useRef, useState } from 'react'
import { AlertContext } from '../../../context/AlertContext';
import { CartContext } from '../../../context/CartContext';
import classes from './ProductItem.module.css'

const ProductItem = ({img,description,price,name}) => {
  const [amount,setamount] = useState(1);
  const animaTimeout = useRef();
  const {addItem} = useContext(CartContext);
  const {showAlert} = useContext(AlertContext);

  const addItemToCartHandler = (e) =>{
    e.preventDefault();
    clearTimeout(animaTimeout.current);
    addItem({
      name: name,
      price: price,
      amount: +amount,
      img:img
    });
    showAlert(`${amount} "${name}" adicionado or cambiado`)
  };

  return (
    <li className={classes.card}>
      <div className={classes.imgContainer}>
        <img src={`./../src/assets/imgs-produtos/${img}`} alt={name} />
      </div>
      <div className={classes.infos}>
        <div>
          <p className={classes.name}>{name}</p>
          <p className={classes.description} title={description}>
            {description}
          </p>
        </div>
        <div className={classes.flex}>
          <p className={classes.price}>S/. {price}</p>
          <form className={classes.amountForm}>
            <label>
            <span>amount</span>
            <input 
            type="number"
            name='amount'
            id={`amount-${name}`}
            value={amount}
            onChange={({target})=> setamount(target.value)}
            />
            </label>
            <button
            className={classes.btnAdd}
            onClick={addItemToCartHandler}
            title="add to cart">
              +
            </button>
          </form>
        </div>
      </div>
    </li>
  )
}

export default ProductItem