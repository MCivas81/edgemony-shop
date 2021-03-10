import HeaderCart from "./HeaderCart";

import "./Header.css";

function Header({ logo, cartSize, totalPrice }) {
  return (
    <header className="header">
      <img className="header-img" src={logo} alt="Edgemony_logo" />
      <HeaderCart cartSize={cartSize} cartTotal={totalPrice} />
    </header>
  );
}

export default Header;
