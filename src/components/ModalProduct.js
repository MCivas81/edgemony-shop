import React, { useState } from "react";

import "./ModalProduct.css";

function ModalProduct({ isOpen, closeModal, product, setCart }) {
  const [isInCart, setIsInCart] = useState(false);

  function addToCart() {
    setCart((prevState) => [...prevState, { ...product }]);
  }

  return isOpen
    ? (document.body.style.overflow = "hidden") && (
        <div className="modal">
          <div className="modal-content">
            <img src={product.image} alt="product_img" />
            <div className="modal-text">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <hr />
              <div className="modal-bottomContent">
                <button
                  disabled={isInCart}
                  onClick={() => {
                    addToCart();
                    setIsInCart(true);
                  }}
                  className="modal-cartBtn"
                  type="button">
                  Add to Cart
                </button>
                <span className="modal-price">Price: €{product.price}</span>
              </div>
            </div>
            <div>
              <button onClick={() => closeModal()} type="button" className="modal-btn">
                X
              </button>
            </div>
          </div>
        </div>
      )
    : (document.body.style.overflow = "") && null;
}

export default ModalProduct;
