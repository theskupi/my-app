import { number, object, SchemaOf, string } from "yup";
import { UserInterface } from "../../models/User";

export const userEditFormSchema: SchemaOf<UserInterface> = object({
  id: number().required(),
  name: string().required(),
  email: string().email().required(),
  username: string().required(),
}).required();
