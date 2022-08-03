import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Homepage";
import Login from "../Login";
import { ProtectedRoute } from "../../components/ProtectedRoute";


const ViewRoutes = () => (
  <Routes>
    <Route exact path="/login" element={<Login />} />
    <Route
        path="/"
        element={
          <ProtectedRoute>
            <Homepage />
          </ProtectedRoute>
        }
      />
  </Routes>
) 

export default ViewRoutes;
