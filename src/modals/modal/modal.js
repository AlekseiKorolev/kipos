import React from "react";

import classes from "./modal.module.css";

import Backdrop from '../backdrop/backdrop';
import CalculatorModal from "../calculator/calculator-modal";
import PreviewModal from "../preview/preview-modal";

const Modal = ({ calc, order, preview, closeCalcModal, closeOrderModal, closePreviewModal }) => {
  const isActive = calc || preview;

  const callBack = () => {
    if (calc) {
      return closeCalcModal;
    } else if (order) {
      return closeOrderModal;
    } else if (preview) {
      return closePreviewModal;
    } else {
      return;
    }
  } 

  const renderModal = () => {
    if (calc) {
      return <CalculatorModal closeCalcModal={closeCalcModal} />;
    } else if (order) {
      return <div></div>;
    } else if (preview) {
      return  <PreviewModal preview={preview} />;
    } else {
      return <div></div>;
    }
  };

  return isActive && (
    <div>
      <Backdrop clicked={callBack()}  />
      {renderModal()}
    </div>);
};

export default Modal;
