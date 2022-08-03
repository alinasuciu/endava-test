import React from "react";
import Loadable from "@react-loadable/revised";
import { Routes } from "react-dom-router";
import Layout from "layout";
import RouteWrapper from "components/RouteWrapper";
import Loading from "components/Loading";

const HomepageView = Loadable({
  loader: () => import("../Homepage"),
  loading: Loading,
});

const ArticleDetailsView = Loadable({
  loader: () => import("../ArticleDetails"),
  loading: Loading,
});

const ArticleTimerView = Loadable({
  loader: () => import("../ArticleTimer"),
  loading: Loading,
});

const NoTimerView = Loadable({
  loader: () => import("../NoTimer"),
  loading: Loading,
});

const PageNotFoundView = Loadable({
  loader: () => import("../PageNotFound"),
  loading: Loading,
});

interface IProps {}

const ViewRoutes: React.StatelessComponent<IProps> = () => (
  <Switch>
    {/* <RouteWrapper
      exact
      path="/"
      layout={Layout}
      view={HomepageView}
      bgImage="/assets/images/page--background.jpg"
    /> */}
    <RouteWrapper
      exact
      path="/article-details"
      layout={Layout}
      view={ArticleDetailsView}
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
  </Switch>
);

export default ViewRoutes;
