import "./Header.css";

function Header({ logo, cart }) {
  let prices = 0;

  function totalPrices() {
    cart.map((product) => (prices = prices + product.price));
    return prices;
  }

  return (
    <header className="header">
      <img className="header-img" src={logo} alt="Edgemony_logo" />
      <div className="header-container">
        <span>Total Price: {totalPrices()}</span>
        <span>Products in Cart: {cart.length}</span>
      </div>
    </header>
  );
}

export default Header;
