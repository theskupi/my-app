import { useQuery } from "react-query";
import axios from "axios";
import { UserComment } from "../models/UserComment";

const getUserCommentsQueryKey = (userId: number | string) => [
  "users",
  "comments",
  userId,
];

export const useUserCommentsQuery = (userId: number | string) => {
  return useQuery<UserComment[], Error>(getUserCommentsQueryKey(userId), () =>
    axios
      .get("https://jsonplaceholder.typicode.com/comments/")
      .then((response) => response.data)
  );
};
