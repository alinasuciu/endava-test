import React from "react";
import { Link } from "react-router-dom";

export default function Header({ isLoggedIn, onLogout }) {
  return (
    <header className="">
      <div className="header__content">
        <Link to={"/login"}>Login</Link>
        <Link to="/">Home</Link>
        {isLoggedIn && (
          <button type="button" onClick={onLogout}>
            Sign Out
          </button>
        )}
      </div>
    </header>
  );
}
