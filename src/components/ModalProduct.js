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
              {isAlreadyInCart() ? "Remove to Cart -" : "Add to Cart +"}
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
