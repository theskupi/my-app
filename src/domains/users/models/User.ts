export interface UserInterface {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const cUser: Record<keyof UserInterface, string> = {
  email: "email",
  id: "id",
  name: "name",
  username: "username",
};
