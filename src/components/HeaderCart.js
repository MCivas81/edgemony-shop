import "./HeaderCart.css";

function HeaderCart({ cartSize, cartTotal, onCartClick }) {
  return (
    <div className="HeaderCart">
      {!!cartSize && <span className="price">€ {cartTotal}</span>}
      <span className="icon" onClick={onCartClick}>
        <i className="fas fa-shopping-cart"></i>
        {!!cartSize && <span className="qty">{cartSize}</span>}
      </span>
    </div>
  );
}

export default HeaderCart;
