import React, { Children } from 'react'
import classes from './WrapperButton.module.css'
const WrapperButton = ({className,children,title}) => {
    const styles = classes.button + " " + className
  return (
    <button className={styles}>
        {children}
    </button>
  )
}

export default WrapperButton