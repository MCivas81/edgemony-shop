import "./Product.css";
import React, { useState } from "react";
import ModalProduct from "./ModalProduct";

function Product({ image, title, price }) {
  const [modalIsShown, setModalIsShown] = useState(false);

  return (
    <div>
      <div className="card">
        <img className="card-img" src={image} alt={title} />
        <div className="card-text">
          <h2 className="card-title">{title}</h2>
          <h3 className="card-price">Price: €{price}</h3>
        </div>
        <button type="button" className="card-btn" onClick={() => setModalIsShown(true)}>
          View details
        </button>
      </div>
      <ModalProduct
        isOpen={modalIsShown}
        closeModal={() => setModalIsShown(false)}
        image={image}
        title={title}
        price={price}
      />
    </div>
  );
}

export default Product;
