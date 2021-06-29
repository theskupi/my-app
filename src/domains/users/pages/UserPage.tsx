import * as React from "react";
import { FunctionComponent } from "react";
import UserContainer from "../containers/UserContainer/UserContainer";

interface UserPageProps {}

const UserPage: FunctionComponent<UserPageProps> = () => {
  return <UserContainer />;
};

export default UserPage;
