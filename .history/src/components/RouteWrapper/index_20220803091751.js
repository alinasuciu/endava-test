// @flow

import * as React from "react";
import { Route } from "react-router-dom";

const RouteWrapper = ({
  element: View,
  layout: Layout,
  backgroundImage,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout {...rest}>
        <View {...props} />
      </Layout>
    )}
  />
);

export default RouteWrapper;
