import React from "react";
import Loadable from 'react-loadable';
import { Routes, Route } from "react-router-dom";
import Loading from "../../components/Loading";
import Homepage from "../Homepage";
import Login from "../Login";

const HomepageView = Loadable({
  loader: () => import("../Homepage"),
  loading: Loading,
});

const LoginView = Loadable({
  loader: () => import("../Login"),
  loading: Loading,
});


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
