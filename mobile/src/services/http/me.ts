import { AxiosRequestConfig, AxiosResponse } from "axios";
import { IUser } from "../../hooks/auth";
import { ROUTES } from "../../utils/constants";
import { httpClient } from "../httpClient";

export const me = (config: AxiosRequestConfig): Promise<AxiosResponse<IUser, any>> => {
  return httpClient.get<IUser>(ROUTES.ME_ROUTE, config );
}
