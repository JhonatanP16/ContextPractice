import React from 'react'
import classes from './ButtonClose.module.css';
import {FaMixer} from "react-icons/fa";
const ButtonClose = ({onClose,className}) => {
    
  const styles = classes.button + ' ' + className;

  return (
    <button className={styles} onClick={onClose}>
        x
    </button>
  )
}

export default ButtonClose