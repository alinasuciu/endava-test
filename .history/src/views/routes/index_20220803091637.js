import React from "react";
import Loadable from 'react-loadable';
import { Routes } from "react-router-dom";
import Layout from "../../layout";
import RouteWrapper from "../../components/RouteWrapper";
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
     <RouteWrapper
      path="/"
      layout={Layout}
      view={HomepageView}
    />
    <RouteWrapper
      path="/login"
      layout={Layout}
      element={<LoginView />}
    />
  </Routes>
);

export default ViewRoutes;
