import React from "react";

import "./ModalProduct.css";

function ModalProduct({ image, title, price }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <img src={image} alt="product_img" />
        <div className="modal-text">
          <h2>{title}</h2>
          <h3>Price: €{price}</h3>
        </div>
        <div>
          <button type="button" className="modal-btn">
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalProduct;
