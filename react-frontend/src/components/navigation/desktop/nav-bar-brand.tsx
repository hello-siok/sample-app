import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarBrand: React.FC = () => {
  return (
    <div className="nav-bar__brand">
      <NavLink to="/">
        <img
          className="nav-bar__logo"
          src="https://cdn-icons-png.flaticon.com/512/7218/7218647.png"
          alt="logo"
          width="50"
          height="60"
        />
      </NavLink>
    </div>
  );
};
