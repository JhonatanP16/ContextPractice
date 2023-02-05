import React from 'react';
import Filter from '../../filter/Filter';
import classes from './Products.module.css';
const Products = () => {
  return (
    <div className="container">
        <main className={classes.main}>
         <p className={classes.navCatalogo}>Home / Catalogo</p>
         <Filter/>
        </main>
    </div>
  )
}

export default Products