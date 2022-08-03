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
      exact
      path="/"
      layout={Layout}
      view={HomepageView}
      //darkLogo={true}
    />
    <RouteWrapper
      exact
      path="/login"
      layout={Layout}
      view={LoginView}
      //bgImage="/assets/images/page--background.jpg"
      //darkLogo={true}
    />
  </Routes>
);

export default ViewRoutes;
