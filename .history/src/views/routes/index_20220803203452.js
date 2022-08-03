import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../Homepage";
import Login from "../Login";
import { useAuth } from "../../common/hooks";

const ViewRoutes = () => {
  const { isLoggin } = useAuth();

  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route
        path="login"
        element={isLoggin ? <Navigate replace to="/" /> : <Login />}
      />
    </Routes>
  );
};

export default ViewRoutes;
