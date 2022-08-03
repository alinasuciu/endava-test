import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";
import Login from "../Login";


const ViewRoutes = () => (
  <Routes>
     <Route
      path="/"
      //layout={Layout}
      element={<Homepage />}
    />
    <Route
      path="/login"
      //layout={Layout}
      element={<Login />}
    />
  </Routes>
);

export default ViewRoutes;