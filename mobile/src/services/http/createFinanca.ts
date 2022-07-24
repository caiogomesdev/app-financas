import { AxiosRequestConfig } from "axios";
import { ROUTES } from "../../utils/constants";
import { IFinancaDto } from "../../utils/dtos";
import { httpClient } from "../httpClient";

export const createFinanca = async (body: IFinancaDto, config: AxiosRequestConfig): Promise<IFinancaDto> => {
  const result = await httpClient.post(ROUTES.FINANCA_CREATE, body, config)
  return result.data;
}
