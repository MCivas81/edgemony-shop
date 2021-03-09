import "./Product.css";
import React from "react";

function Product({ product, openProductModal }) {
  return (
    <div>
      <div className="card">
        <img className="card-img" src={product.image} alt={product.title} />
        <div className="card-text">
          <h2 className="card-title">{product.title}</h2>
          <span className="card-price">Price: €{product.price}</span>
        </div>
        <button type="button" className="card-btn" onClick={openProductModal}>
          View details
        </button>
      </div>
    </div>
  );
}

export default Product;
