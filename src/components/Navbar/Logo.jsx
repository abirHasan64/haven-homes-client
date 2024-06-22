import React from "react";
import logo from "../../assets/images/havenLogoNew.png";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img className="hidden md:block" src={logo} alt="Haven Homes" width="150" height="100" />
      </Link>
    </div>
  );
};

export default Logo;
