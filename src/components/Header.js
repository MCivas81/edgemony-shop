import "./Header.css";

function Header({ logo }) {
  return (
    <header className="header">
      <img className="header-img" src={logo} alt="Edgemony_logo" />
    </header>
  );
}

export default Header;
