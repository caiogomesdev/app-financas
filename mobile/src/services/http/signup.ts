import { IUser } from "../../hooks/auth";
import { ROUTES } from "../../utils/constants";
import { ISignUpDto } from "../../utils/dtos";
import { httpClient } from "../httpClient";

export const signup = async (body: ISignUpDto): Promise<IUser> => {
  const result = await httpClient.post(ROUTES.SIGNUP, body)
  return result.data;
}
