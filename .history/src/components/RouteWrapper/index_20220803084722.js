// @flow

import * as React from "react";
import { Route } from "react-router-dom";

const RouteWrapper = ({
  view: View,
  layout: Layout,
  backgroundImage,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout {...rest}>
        <div>Router wrapper</div>
        <View {...props} />
      </Layout>
    )}
  />
);

export default RouteWrapper;
