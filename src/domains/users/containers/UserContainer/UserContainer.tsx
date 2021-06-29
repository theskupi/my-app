import * as React from "react";
import { FunctionComponent } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { useUserQuery } from "../../hooks/useUserQuery";
import {
  Button,
  CircularProgress,
  Container,
  Divider,
  Grid,
} from "@material-ui/core";
import UserCard from "../../components/UserCard/UserCard";
import { useUserCommentsQuery } from "../../hooks/useUserCommentsQuery";
import UserCommentCard from "../../components/UserCommentCard/UserCommentCard";

interface UserContainerParamsInterface {
  id: string;
}

const UserContainer: FunctionComponent = () => {
  // We need ID -> url => router hooku
  const { id } = useParams<UserContainerParamsInterface>();
  const { push } = useHistory();

  // Fetch data about user
  const {
    data: dataUser,
    isLoading: isLoadingUser,
    isError: isErrorUser,
  } = useUserQuery(id);
  const {
    data: dataUserComments,
    isLoading: isLoadingUserComments,
    isError: isErrorUserComments,
  } = useUserCommentsQuery(id);

  // if data ? user card : error/spinner
  if (isLoadingUser || isLoadingUserComments) return <CircularProgress />;
  if (!dataUser || !dataUserComments || isErrorUser || isErrorUserComments)
    return <Redirect to="/404" />;

  //

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => push(`/users/${id}/edit`)}
          >
            Edit user
          </Button>
        </Grid>
        <Grid item xs={12}>
          <UserCard user={dataUser} />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        {dataUserComments.map((comment) => (
          <Grid item xs={12}>
            <UserCommentCard comment={comment} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UserContainer;
