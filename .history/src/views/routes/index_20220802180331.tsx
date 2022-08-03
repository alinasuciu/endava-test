import React from "react";
import Loadable from "@react-loadable/revised";
import { Routes } from "react-dom-router";
import Layout from "../../layout";
import RouteWrapper from "components/RouteWrapper";
import Loading from "components/Loading";

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
    {/* <RouteWrapper
      exact
      path="/"
      layout={Layout}
      view={HomepageView}
      bgImage="/assets/images/page--background.jpg"
    /> */}
    <RouteWrapper
      exact
      path="/login"
      layout={Layout}
      view={LoginView}
      //bgImage="/assets/images/page--background.jpg"
      darkLogo={true}
    />
    <RouteWrapper
      exact
      path="/article-timer"
      layout={Layout}
      view={ArticleTimerView}
      darkLogo={true}
    />
    <RouteWrapper
      exact
      path="/no-timer"
      layout={Layout}
      view={NoTimerView}
      darkLogo={true}
      bgImage="/assets/images/page--background.jpg"
    />
     <RouteWrapper
      exact
      layout={Layout}
      view={PageNotFoundView}
      darkLogo={true}
      bgImage="/assets/images/page--background.jpg"
    />
  </Routes>
);

export default ViewRoutes;
