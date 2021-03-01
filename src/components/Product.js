import "./Product.css";

function Product({ image, title, price }) {
  return (
    <div className="card">
      <img className="card-img" src={image} alt={title} />
      <div className="card-text">
        <h2>{title}</h2>
        <h3>{price}</h3>
      </div>
      <button className="card-btn">View details</button>
    </div>
  );
}

export default Product;
