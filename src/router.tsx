import * as React from "react";
import { FunctionComponent, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./domains/common/components/Layout/Layout";
import { CircularProgress } from "@material-ui/core";

const Router: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={() => <CircularProgress />}>
        <Switch>
          {/* PUBLIC */}
          <Route>
            <Layout>
              <Switch>
                <Route
                  exact
                  path="/users"
                  component={React.lazy(
                    () => import("./domains/users/pages/UsersPage")
                  )}
                />
                <Route
                  exact
                  path="/users/:id"
                  component={React.lazy(
                    () => import("./domains/users/pages/UserPage")
                  )}
                />
                <Route
                  exact
                  path="/users/:id/edit"
                  component={React.lazy(
                    () => import("./domains/users/pages/UserEditPage")
                  )}
                />
              </Switch>
            </Layout>
          </Route>

          {/* AUTH */}
          <Route>
            <Layout>
              <Switch>
                <Route
                  exact
                  path="/admin"
                  component={React.lazy(
                    () =>
                      import(
                        "./domains/admin/dashboard/pages/AdminDashboardPage"
                      )
                  )}
                />
              </Switch>
            </Layout>
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
