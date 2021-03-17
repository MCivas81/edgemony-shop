import { Link } from "react-router-dom";

import "./HeaderCart.css";

function HeaderCart({ cartSize, cartTotal, onCartClick }) {
  return (
    <div className="HeaderCart">
      {!!cartSize && <span className="price">€ {cartTotal}</span>}
      <Link to="/cart" className="icon">
        <i className="fas fa-shopping-cart"></i>
        {!!cartSize && <span className="qty">{cartSize}</span>}
      </Link>
    </div>
  );
}

export default HeaderCart;
