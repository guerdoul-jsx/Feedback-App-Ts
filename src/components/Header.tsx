import { FC } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/icons8-stars-47.png";

type HeaderPropTypes = {
  text?: string;
  bgColor?: string;
  color?: string;
};

const Header: FC<HeaderPropTypes> = ({ text, color, bgColor }) => {
  return (
    <header style={{ backgroundColor: bgColor, color: color }}>
      <div className="container header-container">
        <Link to="/" className="header-link">
          <h2>{text}</h2>
        </Link>
        <img src={Logo} alt="Logo" />
        <Link to="/About" className="header-link">
          About
        </Link>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "Feedback App",
  bgColor: "#27ae60",
  color: "#fff",
};

export default Header;
