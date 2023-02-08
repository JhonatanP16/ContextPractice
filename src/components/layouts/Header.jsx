import React, { useContext, useEffect, useState } from 'react'
import  Logo from '../../assets/logo.png'
import classes from './Header.module.css'
import SearchField from './SearchField';
import { FaMoon, FaShoppingCart, FaSun} from "react-icons/fa";
import { ColorModeContext } from '../../context/ColorModeContext';
import { CartContext } from '../../context/CartContext';
const Header = ({onShow}) => {
    const {itemsCart} = useContext(CartContext);
    const [pageScrolled, setPageScrolled] = useState(false);
    const {changeMode,isDarkMode} = useContext(ColorModeContext);

    const totalItemsInTheCart = itemsCart.items.reduce((prev, curr) => {
        return prev + curr.amount;
      }, 0);
    useEffect(()=>{
        const scrollPage = () =>{
            if(window.scrollY > 16){
                setPageScrolled(true)
            }else{
                setPageScrolled(false)
            }
        };
        window.addEventListener('scroll',scrollPage)
        return () => {
        window.removeEventListener('scroll',scrollPage)
        }
    },[])
  return (
    <header className={`${classes.header} ${pageScrolled ? classes.scroll : ""}`}>
        <div className={`container ${classes.container}`}>
            <span className={classes.logo}>
                <img src={Logo} alt=""/>
                Cactus
            </span>
            <SearchField/>
            <button className={classes.cart} onClick={onShow}>
                <span className={classes.cartTxt}>Seu Carrito</span>
                <span className={classes.amount}>
                    <FaShoppingCart/>
                    <span className={classes.value}>{totalItemsInTheCart}</span>
                </span>
            </button>
            <button
            className={classes.btnColorMode}
            onClick={changeMode}
            title={isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
            >
                {
                    isDarkMode ? <FaMoon/> : <FaSun/>
                }
            </button>
        </div>
    </header>
  )
}

export default Header