import * as React from "react";
import { FunctionComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UsersPage from "./domains/users/pages/UsersPage";
import Layout from "./domains/common/components/Layout/Layout";

const Router: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* PUBLIC */}
        <Route>
          <Layout>
            <Switch>
              <Route exact path="/" component={UsersPage} />
            </Switch>
          </Layout>
        </Route>

        {/* AUTH */}
        <Route>
          <Layout>
            <Switch>
              <Route exact path="/admin" render={() => <div>DASHBOARD</div>} />
            </Switch>
          </Layout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
