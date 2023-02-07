import React, { useState,useEffect } from 'react'
import WrapperFiltroSection from '../utilities/WrapperFiltroSection';
import classes from './FormPrice.module.css'
const FormPrice = ({setFilter}) => {
    const [prices,setprices]= useState({min:0,max:1000});

    const handleChangeMin = ({target}) =>{
        setprices((currVal) =>({...currVal,min:target.value}));
    }
    const handleChangeMax = ({target}) =>{
        setprices((currVal) =>({...currVal,max:target.value}));
    }
    useEffect(()=>{
     setFilter(prices);
    },[setFilter,prices]);
  return (
    <WrapperFiltroSection title='Precio'>
        <form className={classes.form}>
            <label htmlFor="check1">
                Min S/.
                <input 
                type="number"
                step='0.01'
                min='0'
                name='valor_min'
                id="min"
                value={prices.min}
                onChange={handleChangeMin} 
                />
            </label>
            <label htmlFor="check1">
            Max (R$)
            <input
                type="number"
                step="0.01"
                name="valor_max"
                id="max"
                value={prices.max}
                onChange={handleChangeMax}
            />
        </label>
        </form>
    </WrapperFiltroSection>
  )
}

export default FormPrice