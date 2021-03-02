import "./Product.css";
import React, { useState } from "react";
import ModalProduct from "./ModalProduct";

function Product({ image, title, price }) {
  const [modalIsShown, setModalIsShown] = useState(false);

  function handleClick() {
    setModalIsShown(true);
  }

  return !modalIsShown ? (
    <div className="card">
      <img className="card-img" src={image} alt={title} />
      <div className="card-text">
        <h2 className="card-title">{title}</h2>
        <h3 className="card-price">Price: €{price}</h3>
      </div>
      <button type="button" className="card-btn" onClick={handleClick}>
        View details
      </button>
    </div>
  ) : (
    <div>
      <div className="card">
        <img className="card-img" src={image} alt={title} />
        <div className="card-text">
          <h2 className="card-title">{title}</h2>
          <h3 className="card-price">Price: €{price}</h3>
        </div>
        <button type="button" className="card-btn" onClick={handleClick}>
          View details
        </button>
      </div>
      <ModalProduct image={image} title={title} price={price} />
    </div>
  );
}

export default Product;
