import "./ProductDetails.css";

function ProductDetails({ product, inCart, addToCart, removeFromCart }) {
  const toggleCart = () => {
    if (inCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product.id);
    }
  };

  return (
    <div className="ProductDetails__content">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button type="button" className="ProductDetails__addToCart" onClick={toggleCart}>
        {inCart ? "Remove to Cart -" : "Add to Cart +"}
      </button>
      <br />
      <br />
      <hr />
      <div className="ProductDetails__price">
        <small>Price:</small> {product.price}€
      </div>
    </div>
  );
}

export default ProductDetails;
