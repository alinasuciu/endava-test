import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../common/hooks";

export default function Header({ onLogout }) {
  const { isLoggin } = useAuth();
  return (
    <header className="">
      <div className="header__content">
        <Link to={"/login"}>Login</Link>
        <Link to="/">Home</Link>
        {isLoggin && (
          <button type="button" onClick={onLogout}>
            Sign Out
          </button>
        )}
      </div>
    </header>
  );
}
