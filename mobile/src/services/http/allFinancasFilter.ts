import { AxiosRequestConfig } from "axios";
import { ROUTES } from "../../utils/constants";
import { Financa } from "../../utils/dtos";
import { FilterEnum } from "../../utils/enums";
import { httpClient } from "../httpClient";

export const getAllFinancasWithFilter = async (
  filter: FilterEnum,
  config: AxiosRequestConfig
  ): Promise<Financa[]> => {
  const result = await httpClient.get(`${ROUTES.FINANCA_FILTER}/${filter}`, config);
  return result.data;
}
