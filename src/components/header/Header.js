import "./Header.css";
import globe from "../../assets/globe.gif";

const Header = () => {
  return (
    <header className="header_container">
      <h1>Nations United</h1>
      <img src={globe} alt="rotating globe" height="50px" />
    </header>
  );
};

export default Header;
