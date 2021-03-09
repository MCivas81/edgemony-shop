import React from "react";

import "./ModalProduct.css";

function ModalProduct({ isOpen, closeModal, product, setCart, cart }) {
  const isAlreadyInCart = () => cart.find((p) => p.id === product.id);

  const toggleCart = () => {
    if (isAlreadyInCart()) {
      const newCart = cart.filter((p) => p.id !== product.id);
      setCart(newCart);
    } else {
      setCart([...cart, { quantity: 1, ...product }]);
    }
  };

  return isOpen ? (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content">
        <img src={product.image} alt="product_img" />
        <div className="modal-text">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <hr />
          <div className="modal-bottomContent">
            <button onClick={toggleCart} className="modal-cartBtn" type="button">
              {isAlreadyInCart() ? "Remove to Cart -" : "Add to Cart +"}
            </button>
            <span className="modal-price">Price: €{product.price}</span>
          </div>
        </div>
        <div>
          <button onClick={closeModal} type="button" className="modal-btn">
            x
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default ModalProduct;
