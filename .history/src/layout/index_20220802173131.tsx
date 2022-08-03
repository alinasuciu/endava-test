import React from "react";
import Header from "./Header";


export default function defaultLayout({children}) {
  return (
    <div className="app-layout" style={{ backgroundImage: bgImg }}>
      <Header />
      <div className="content content--public">{children}</div>
    </div>
  )
}