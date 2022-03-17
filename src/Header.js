import React from "react";
import "./Header.css";
import LinkItem from "./LinkItem";
import logo from "./logo.png";

function Header() {
  return (
    <header id="header">
      <div className="container">
        <div className="flex__box">
          <div className="link_col left">
            <ul>
              <LinkItem link="/" titel="Home" />
              <LinkItem link="/" titel="Link2" />
              <LinkItem link="/" titel="Link3" />
              <LinkItem link="/" titel="Link4" />
            </ul>
          </div>
          <div className="logo_col">
            <img src={logo} alt="" />
          </div>
          <div className="link_col right">
            <ul>
              <LinkItem link="/" titel="Home5" />
              <LinkItem link="/" titel="Link6" />
              <LinkItem link="/" titel="Link7" />
              <LinkItem link="/" titel="Link8" />
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
