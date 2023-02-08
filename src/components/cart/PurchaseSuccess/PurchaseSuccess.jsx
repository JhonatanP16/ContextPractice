import React, { useContext } from 'react'
import { ColorModeContext } from '../../../context/ColorModeContext'
import ButtonClose from '../../utilities/ButtonClose';
import Modal from '../../utilities/Modal';
import WrapperButton from '../../utilities/WrapperButton';
import classes from './PurchaseSuccess.module.css'
const PurchaseSuccess = ({onClose}) => {
    const {isDarkMode} = useContext(ColorModeContext);
  return (
    <Modal onClose={onClose} isDarkMode={isDarkMode}>
         <div className={classes.modal}>
        <p className={classes.title}>Parabéns!</p>
        <p>Sua compra foi finalizada.</p>
        <p>Seu pedido chegará em breve.</p>
        <WrapperButton className={classes.button} onClick={onClose}>
          Comprar novamente
        </WrapperButton>
      </div>
      <ButtonClose onClose={onClose} />
    </Modal>
  )
}

export default PurchaseSuccess