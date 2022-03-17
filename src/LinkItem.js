import React from "react";
import "./LinkItem.css";

function LinkItem({ link, titel }) {
  return (
    <li className="LinkItem">
      <a href={link}>{titel}</a>
    </li>
  );
}

export default LinkItem;
