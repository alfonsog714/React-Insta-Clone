import React from "react";
import Logo from "../../assets/ig_logo.png";
import "./SearchBar.css";

const SearchBar = props => {
  return (
    <div className="header">
      <div className="logos">
        <img src={Logo} alt="IG Logo" className="ig-logo" />
      </div>
      <div className="search-input-container">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="social-icons">
        <i className="far fa-compass fa-2x" />
        <i className="far fa-user fa-2x" />
        <i className="far fa-heart fa-2x" />
      </div>
    </div>
  );
};

export default SearchBar;
