import React from "react";
import Loadable from 'react-loadable';
import { BrowserRouter as Router } from "react-router-dom";
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
  <Router>
     <RouteWrapper
      exact
      path="/"
      layout={Layout}
      view={HomepageView}
    />
    <RouteWrapper
      exact
      path="/login"
      layout={Layout}
      view={LoginView}
    />
  </Router>
);

export default ViewRoutes;
