import HeaderCart from "./HeaderCart";

import "./Header.css";

function Header({ logo, cartSize, cartTotal, onCartClick }) {
  return (
    <header className="header">
      <img className="header-img" src={logo} alt="Edgemony_logo" />
      <HeaderCart cartSize={cartSize} cartTotal={cartTotal} onCartClick={onCartClick} />
    </header>
  );
}

export default Header;
