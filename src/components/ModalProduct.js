import React from "react";

import "./ModalProduct.css";

function ModalProduct({ isOpen, closeModal, image, title, price, description }) {
  return isOpen
    ? (document.body.style.overflow = "hidden") && (
        <div className="modal">
          <div className="modal-content">
            <img src={image} alt="product_img" />
            <div className="modal-text">
              <h2>{title}</h2>
              <p>{description}</p>
              <hr />
              <span className="modal-price">Price: €{price}</span>
            </div>
            <div>
              <button onClick={() => closeModal()} type="button" className="modal-btn">
                X
              </button>
            </div>
          </div>
        </div>
      )
    : (document.body.style.overflow = "unset") && null;
}

export default ModalProduct;
