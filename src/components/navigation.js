import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export default function Navigation() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className="site-navigation">
      <span className="menu-title">Dongeun's Blog</span>
      <div className="menu-content-container">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <i
          className="ionicons icon ion-ios-menu"
          onClick={() => setMenuActive(!menuActive)}
        />
      </div>
    </nav>
  );
}
