import { ISignIn } from "../../hooks/auth";
import { ROUTES } from "../../utils/constants";
import { httpClient } from "../httpClient";

export const signinRoute = async ({ email, password }: ISignIn): Promise<string> => {
  const result = await httpClient.post(ROUTES.SIGNIN, {
    email,
    password
  })
  return result.data.token;
}
