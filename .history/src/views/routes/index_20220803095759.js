import React from "react";
import Loadable from 'react-loadable';
import { Routes, Route } from "react-router-dom";
import Loading from "../../components/Loading";

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
      element={<HomepageView />}
    />
    <Route
      path="/login"
      //layout={Layout}
      element={<LoginView />}
    />
  </Routes>
);

export default ViewRoutes;
