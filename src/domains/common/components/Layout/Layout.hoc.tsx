import React, { ComponentType, FunctionComponent } from "react";
import Layout from "./Layout";

const withLayout =
  (WrappedComponent: ComponentType): FunctionComponent =>
  (props) =>
    (
      <Layout>
        <WrappedComponent {...props} />;
      </Layout>
    );

export default withLayout;
