import React, { useEffect, useState } from 'react'
import  Logo from '../../assets/logo.png'
import classes from './Header.module.css'
import SearchField from './SearchField';
import { FaMoon, FaShoppingCart, FaSun} from "react-icons/fa";
const Header = () => {
    const [pageScrolled, setPageScrolled] = useState(false);
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
            <button className={classes.cart}>
                <span className={classes.cartTxt}>Seu Carrito</span>
                <span className={classes.amount}>
                    <FaShoppingCart/>
                    <span className={classes.value}>4</span>
                </span>
            </button>
            <button
            className={classes.btnColorMode}
            title='modo dark'
            >
            <FaSun/>
           {/*  <FaMoon/> */}
            </button>
        </div>
    </header>
  )
}

export default Header