import "./Product.css";

function Product({ image, title, price }) {
  return (
    <div className="card">
      <img className="card-img" src={image} alt={title} />
      <div className="card-text">
        <h2 className="card-title">{title}</h2>
        <h3 className="card-price">Price: €{price}</h3>
      </div>
      <button type="button" className="card-btn">
        View details
      </button>
    </div>
  );
}

export default Product;
