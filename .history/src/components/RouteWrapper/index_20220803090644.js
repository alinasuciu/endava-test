// @flow

import * as React from "react";
import { Route } from "react-router";

const RouteWrapper = ({
  components: View,
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
