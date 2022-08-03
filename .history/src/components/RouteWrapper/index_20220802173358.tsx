// @flow

import * as React from "react";
import { Route } from "react-router-dom";

const RouteWrapper: React.FC<any> = ({
  view: View,
  layout: Layout,
  backgroundImage,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props: any) => (
      <Layout {...rest}>
        <View {...props} />
      </Layout>
    )}
  />
);

export default RouteWrapper;
