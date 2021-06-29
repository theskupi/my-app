import * as React from "react";
import { FunctionComponent } from "react";
import { Redirect, useParams } from "react-router-dom";
import { useUserQuery } from "../../hooks/useUserQuery";
import { CircularProgress, Container } from "@material-ui/core";
import UserEditForm from "../../forms/UserEditForm";

interface UserEditContainerParams {
  id: string;
}

const UserEditContainer: FunctionComponent = () => {
  // We need ID -> url => router hooku
  const { id } = useParams<UserEditContainerParams>();

  // Fetch data about user
  const { data, isLoading, isError } = useUserQuery(id);

  // if data ? user card : error/spinner
  if (isLoading) return <CircularProgress />;
  if (!data || isError) return <Redirect to="/404" />;

  return (
    <Container>
      <UserEditForm
        initialValues={data}
        onSubmit={(values) => console.log("SAVE DATA TO BACKEND", values)}
      />
    </Container>
  );
};

export default UserEditContainer;
