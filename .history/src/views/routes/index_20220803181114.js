import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";
import Login from "../Login";


const ViewRoutes = () => (
  <Routes>
     <Route
      exact
      path="/"
      element={<Homepage />}
    />
    <Route
      exact
      path="/login"
      element={<Login />}
    />
  </Routes>
);

export default ViewRoutes;
