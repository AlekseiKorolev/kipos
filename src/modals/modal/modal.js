import React from "react";

import classes from "./modal.module.css";

import Backdrop from '../backdrop/backdrop';
import CalculatorModal from "../calculator/calculator-modal";

const Modal = ({ calc, order, closeCalcModal, closeOrderModal }) => {
  const renderModal = () => {
    if (calc) {
      return (
        <div>
          <Backdrop clicked={closeCalcModal} />
          <div className={classes.modal}>
          <CalculatorModal closeCalcModal={closeCalcModal} />
          </div>
        </div>
      );
    } else if (order) {
      return <div>Should be order</div>;
    } else {
      return <div></div>;
    }
  };

  return renderModal();
};

export default Modal;
