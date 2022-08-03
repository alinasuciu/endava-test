import React from "react";
import Loadable from 'react-loadable';
import { Switch } from "react-router";
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
  <Switch>
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
  </Switch>
);

export default ViewRoutes;
