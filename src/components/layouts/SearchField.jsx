import React from 'react'
import WrapperButton from '../utilities/WrapperButton'
import classes from './SearchField.module.css'
import { FaSearch } from "react-icons/fa";
const SearchField = () => {
  return (
    <form className={classes.form}>
        <label htmlFor="search">Pequis aqui</label>
        <input 
        type="search"
        name='search'
        id='search'
        placeholder='Buscar aqui'
        />
        <WrapperButton className={classes.btn} title='buscar'>
            <FaSearch className={classes.iconSearch}/>
        </WrapperButton>
    </form>
  )
}

export default SearchField