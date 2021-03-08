import React, { useState, useEffect } from "react";

import "./ModalProduct.css";

function ModalProduct({ isOpen, closeModal, product, setCart }) {
  const [isInCart, setIsInCart] = useState(false);
  const [buttonText, setButtonText] = useState("Add to cart");

  function addToCart() {
    setCart((prevState) => [...prevState, { ...product }]);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.height = `100vh`;
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.height = ``;
      document.body.style.overflow = ``;
    }
  }, [isOpen]);

  return isOpen ? (
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
                setButtonText("In Cart");
              }}
              className="modal-cartBtn"
              type="button">
              {buttonText}
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
  ) : null;
}

export default ModalProduct;
