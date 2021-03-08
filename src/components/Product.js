import "./Product.css";
import React, { useState } from "react";
import ModalProduct from "./ModalProduct";

function Product({ product, setCart }) {
  const [modalIsShown, setModalIsShown] = useState(false);

  return (
    <div>
      <div className="card">
        <img className="card-img" src={product.image} alt={product.title} />
        <div className="card-text">
          <h2 className="card-title">{product.title}</h2>
          <span className="card-price">Price: €{product.price}</span>
        </div>
        <button type="button" className="card-btn" onClick={() => setModalIsShown(true)}>
          View details
        </button>
      </div>
      <ModalProduct
        isOpen={modalIsShown}
        closeModal={() => setModalIsShown(false)}
        product={product}
        setCart={setCart}
      />
    </div>
  );
}

export default Product;
