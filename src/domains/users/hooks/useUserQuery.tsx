import axios from "axios";
import { useQuery } from "react-query";

const getUserQueryKey = (id: string) => ["users", id];

export const useUserQuery = (id: string) =>
  useQuery(getUserQueryKey(id), () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data)
  );
