import React, { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about", // what technology I used to make this blog, the philosophy behind this blog's UI, etc.
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
      <div className={`menu-content-container ${menuActive && "active"}`}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <i
        className="ionicons icon ion-ios-menu"
        onClick={() => setMenuActive(!menuActive)}
      />
    </nav>
  );
}
