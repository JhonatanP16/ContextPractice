import React from 'react'
import classes from './Filter.module.css'
const Filter = () => {
  return (
    <>
    <div className={classes.filterContainer}>
        <section className={classes.filter}>
         <h2>Filtrar elements</h2>
         
         <button className={classes.btnClear}>
            Limpiar Filtro
         </button>
        </section>
    </div>
    </>
  )
}

export default Filter