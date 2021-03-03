import React from "react";

import "./ModalProduct.css";

function ModalProduct({ isOpen, closeModal, image, title, price, description }) {
  return isOpen ? (
    <div className="modal">
      <div className="modal-content">
        <img src={image} alt="product_img" />
        <div className="modal-text">
          <h2>{title}</h2>
          <span>{description}</span>
          <h3>Price: €{price}</h3>
        </div>
        <div>
          <button onClick={() => closeModal()} type="button" className="modal-btn">
            X
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default ModalProduct;
