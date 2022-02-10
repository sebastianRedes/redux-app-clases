import React from 'react';
import {createPortal} from "react-dom";
import "../assets/styles/components/Modal.scss";
import {ReactComponent as SVGlose} from "../assets/static/icons/close.svg";

const Modal = (props) =>
  props.isOpen ? 
  createPortal(
    <div className='modal'>
      <figure onClick={props.onClose} className='modal__close'>
        <SVGlose className='modal__close-icon'/>
      </figure>
      <div className='modal__container'>{props.children}</div>
    </div>,
    document.getElementById("modal")
  ) 
  : "";


export default Modal;
