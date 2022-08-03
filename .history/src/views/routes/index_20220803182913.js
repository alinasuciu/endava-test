import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";
import Login from "../Login";


const ViewRoutes = ({ handleLogin }) => (
  <Routes>
     <Route
      exact
      path="/"
      element={<Homepage />}
    />
    <Route
      exact
      path="/login"
      element={<Login onLogin={handleLogin}/>}
    />
  </Routes>
);

export default ViewRoutes;
