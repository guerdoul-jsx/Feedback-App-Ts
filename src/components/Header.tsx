import { FC } from "react";
import { Link } from "react-router-dom";

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
