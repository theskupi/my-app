import * as React from "react";
import { FunctionComponent } from "react";
import { CircularProgress, Container, Grid } from "@material-ui/core";
import { useUsersQuery } from "../../hooks/useUsersQuery";
import { Redirect, useHistory } from "react-router-dom";
import UserCard from "../../components/UserCard/UserCard";

const UsersContainer: FunctionComponent = () => {
  const { push } = useHistory();
  const { data, isError, isLoading } = useUsersQuery();

  if (isLoading) return <CircularProgress />;
  if (isError || !data) return <Redirect to="/404" />;

  return (
    <Container>
      <Grid container spacing={2}>
        {data.map((user) => (
          <Grid item xs={12} md={4}>
            <UserCard
              user={user}
              onDetailClick={(id) => push("/users/" + id)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UsersContainer;
