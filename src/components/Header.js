import { Link } from "react-router-dom";

import HeaderCart from "./HeaderCart";

import "./Header.css";

function Header({ logo, cartSize, cartTotal, onCartClick }) {
  return (
    <header className="header">
      <Link to="/">
        <img className="header-img" src={logo} alt="Edgemony_logo" />
      </Link>
      <HeaderCart
        cartSize={cartSize}
        cartTotal={cartTotal}
        onCartClick={onCartClick}
      />
    </header>
  );
}

export default Header;
