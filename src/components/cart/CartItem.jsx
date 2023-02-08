import React, { useState } from 'react'
import classes from './CartItem.module.css'
const CartItem = ({name, price, img, amount, updateAmount, removeItem}) => {
    const [newAmount,setNewAmount] = useState(amount);
    const updatedAmountHandler = (e) =>{
        const value = +e.target.value;
        setNewAmount(value);
        updateAmount(name,value);
    };
    const removeItemFromCart = () =>{
        removeItem(name);
    };

  return (
    <li className={classes.item}>
        <div className={classes.imgDiv}>
            <img src={`./../src/assets/imgs-produtos/${img}`} alt={name} />
        </div>
        <div className={classes.infos}>
            <p>{name}</p>
            <p className={classes.price}>S/. {Number(price * amount).toFixed(2)}</p>
            <p>
                {amount} unidades de S/. {Number(price).toFixed(2)}
            </p>
            <button className={classes.btn} onClick={removeItemFromCart}>
                Excluir item
            </button>
        </div>
        <form>
            <label htmlFor="cantidad">qt.</label>
            <input 
            type="number"
            id='cantidad'
            name='cantidad'
            min='1'
            step='1'
            value={newAmount}
            onChange={updatedAmountHandler}/>
        </form>
    </li>
  )
}

export default CartItem