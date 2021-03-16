import { Link } from "react-router-dom";

import "./ProductItem.css";
import React from "react";

function ProductItem({ product }) {
  return (
    <div>
      <div className="card">
        <img className="card-img" src={product.image} alt={product.title} />
        <div className="card-text">
          <h2 className="card-title">{product.title}</h2>
          <span className="card-price">Price: €{product.price.toFixed(2)}</span>
        </div>
        <Link to={`/product/${product.id}`}>
          <button type="button" className="card-btn">
            View details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductItem;
