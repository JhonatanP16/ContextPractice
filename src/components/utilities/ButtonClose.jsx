import React from 'react'
import classes from './ButtonClose.module.css';
import { FaFilter, FaMixer} from "react-icons/fa";
const ButtonClose = ({onClose,className}) => {
    
    const styles = classes.button + " " + className;
  return (
    <button className={styles} onClick={onClose}>
        <FaMixer/>
    </button>
  )
}

export default ButtonClose