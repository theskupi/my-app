import axios from "axios";
import { useQuery } from "react-query";
import { UserInterface } from "../models/User";

const getUserQueryKey = (id: string) => ["users", id];

export const useUserQuery = (id: string) =>
  useQuery<UserInterface, Error>(getUserQueryKey(id), () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.data)
  );
