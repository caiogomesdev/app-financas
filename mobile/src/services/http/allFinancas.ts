import { AxiosRequestConfig } from "axios";
import { ROUTES } from "../../utils/constants";
import { IFinancaDto } from "../../utils/dtos";
import { httpClient } from "../httpClient";

export const getAllFinancas = async (config: AxiosRequestConfig): Promise<IFinancaDto[]> => {
  const result = await httpClient.get(ROUTES.FINANCA, config);
  return result.data;
}
