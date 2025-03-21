import { RiMenu2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../../css/header.css";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navItems = ["home", "about", "country", "contact"];

  return (
    <header className="header-section">
      <div className="container">
        {/* ✅ Logo */}
        <NavLink to="/" className="logo">
          World Atlas
        </NavLink>

        {/* ✅ Navigation */}
        <nav className="nav-bar" aria-label="Main Navigation">
          {/* ✅ Mobile Toggle Button */}
          <button
            className="menu-toggle"
            onClick={() => setOpenMenu(!openMenu)}
            aria-label="Toggle navigation menu"
          >
            <RiMenu2Line />
          </button>

          {/* ✅ Menu List */}
          <ul className={`nav-list ${openMenu ? "open" : "close"}`}>
            {navItems.map((item) => (
              <li key={item} className="nav-item">
                <NavLink
                  to={`/${item === "home" ? "" : item}`}
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  onClick={() => setOpenMenu(false)} // ✅ Closes menu when clicking
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
