import axios from "axios";
import { useQuery } from "react-query";
import { UserInterface } from "../models/User";

const getUsersQueryKey = () => ["users"];

export const useUsersQuery = () =>
  useQuery<UserInterface[]>(getUsersQueryKey(), () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data)
  );
