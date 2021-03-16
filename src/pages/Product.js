import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./Product.css";

function Product({ addToCart, removeFromCart, isInCart }) {
  let { productId } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => response.json())
      .then((product) => {
        setProduct(product);
      });
  }, [productId]);

  const toggleCart = () => {
    if (isInCart(product)) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  return (
    <>
      {product ? (
        <div className="Product__content">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <button
            type="button"
            className="Product__addToCart"
            onClick={toggleCart}>
            {isInCart(product) ? "Remove to Cart -" : "Add to Cart +"}
          </button>
          <br />
          <br />
          <hr />
          <div className="Product__price">
            <small>Price:</small> €{product.price}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Product;
