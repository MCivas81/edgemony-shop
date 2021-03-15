import React from "react";

import "./Modal.css";

function Modal({ isOpen, closeModal, children }) {
  return (
    <div className={`Modal ${isOpen ? `isOpen` : ""}`}>
      <div className="Modal__overlay" onClick={closeModal} />
      <div className="Modal__body">
        <button onClick={closeModal} title="close product modal" className="Modal__close">
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
