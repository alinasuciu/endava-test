import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../Homepage";
import Login from "../Login";
import { useAuth } from "../../common/hooks";
import { ProtectedRoute } from "../../components/ProtectedRoute";


const ViewRoutes = () => {
  const { isLoggin } = useAuth(); 
  <Routes>
    <Route exact path="/login" element={<Homepage />} />
    {/* <Route exact path="/login" element={
            isLoggin ? (
              <Navigate replace to="/" />
            ) : (
              <Login />
            )
          } /> */}
    <Route
        path="/"
        element={
          <ProtectedRoute>
            <Homepage />
          </ProtectedRoute>
        }
      />
  </Routes>
};

export default ViewRoutes;
