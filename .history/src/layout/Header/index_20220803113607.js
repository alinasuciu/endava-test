import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <header className=''>
      <div className="header__content">
          <Link to={"/login"}>Login</Link>
          <Link to="/">Home</Link>
      </div>
    </header>
  );
}