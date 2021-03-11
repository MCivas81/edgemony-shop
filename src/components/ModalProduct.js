import React from "react";

import "./ModalProduct.css";

function ModalProduct({ isOpen, closeModal, product, inCart, addToCart, removeFromCart }) {
  const toggleCart = () => {
    if (inCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product.id);
    }
  };

  return (
    <div className={`ModalProduct ${isOpen ? `isOpen` : ""}`}>
      <div className="overlay" onClick={closeModal} />
      <div className="body">
        <button onClick={closeModal} title="close product modal" className="close">
          ×
        </button>
        {!!product ? (
          <div className="content">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <button type="button" className="addToCart" onClick={toggleCart}>
              {inCart ? "Remove to Cart -" : "Add to Cart +"}
            </button>
            <br />
            <br />
            <hr />
            <div className="price">
              <small>Price:</small> {product.price}€
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ModalProduct;
