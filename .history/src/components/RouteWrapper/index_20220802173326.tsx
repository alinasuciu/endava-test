// @flow

import * as React from "react";
import { Route, Redirect } from "react-router-dom";

interface IProps {
  view?: React.ReactNode;
  layout?: React.ReactNode;
  backgroundImage?: string;
}

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
