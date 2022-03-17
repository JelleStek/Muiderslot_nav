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
              <LinkItem
                link="https://muiderslot.nl/kaartjes/"
                titel="Kaartjes"
              />
              <LinkItem link="https://muiderslot.nl/webshop/" titel="Webshop" />
              <LinkItem
                link="https://muiderslot.nl/plan-je-bezoek"
                titel="Plan je bezoek"
              />
            </ul>
          </div>
          <div className="logo_col">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="link_col right">
            <ul>
              <LinkItem link="https://muiderslot.nl/ontdek/" titel="Ontdek" />
              <LinkItem
                link="https://www.datamachine.nl:8443/collectionviewer/"
                titel="Zoeken in de collectie"
              />
              <LinkItem link="https://muiderslot.nl/agenda/" titel="Agenda" />
              <LinkItem link="https://muiderslot.nl/nieuws/" titel="Nieuws" />
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
